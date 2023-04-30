<template>
  <nav>
    <NavItem v-for="item of items" :key="item.name" :data="item" />
  </nav>
</template>

<script>
import { routes } from "@/router";
import NavItem from "@/components/NavBar/NavItem";

export default {
  name: "NavBar",

  components: {
    NavItem,
  },

  data() {
    return {
      items: null,
    };
  },

  created() {
    this.items = this.initItems(routes);
    // console.log('this.items:\n', JSON.stringify(this.items, null, 2))
  },

  methods: {
    initItems(routes, list = []) {
      function IIFE(
        routes,
        items,
        _parentName = "",
        _fullPath = "",
        _depth = 0
      ) {
        for (const route of routes) {
          if (route.hidden === true) continue;

          const { name, meta, path } = route;
          const fullPath = _fullPath + (_fullPath ? "/" : "") + path;
          const depth = _depth + (name ? 1 : 0);
          if (name && meta && meta.title) {
            list.push({
              name,
              title: meta.title,
              path,
              _parentName,
              _fullPath: fullPath,
              _depth: depth,
              children: [],
            });
          }

          if (route.children) {
            IIFE(
              route.children,
              list,
              route.name || _parentName,
              fullPath,
              depth
            );
          }
        }
      }

      IIFE(routes);

      const parentMap = new Map();
      list.forEach((_) => {
        parentMap.set(_.name, _);
      });

      const items = [];
      list.forEach((_) => {
        const parent = parentMap.get(_._parentName);
        if (parent) {
          parent.children.push(_);
        } else {
          items.push(_);
        }
      });
      return items;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 100%;
  overflow: auto;
  border-right: 1px solid #999;
  background-color: #001529;
}
</style>
