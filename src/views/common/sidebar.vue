<template>
  <t-aside :width="useStore.menuCollapse ? '54px' : '232px'">
    <t-menu :collapsed="useStore.menuCollapse" :defaultValue="$route.name">
      <sidebar-item
        v-for="(item, index) in permissionStorer.menuRoutes"
        :key="index"
        :item="item"
      ></sidebar-item>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import sidebarItem from "@/components/sidebaritem.vue";
import { useAppStore } from "@/store";
import { usePermissionStore } from "@/store";

const useStore = useAppStore();
const permissionStorer = usePermissionStore();
</script>
<style scoped></style>
