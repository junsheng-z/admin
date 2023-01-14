<template>
  <t-menu-item
    v-if="item && !item.children"
    :value="item.name"
    :to="{ name: item.name }"
  >
    <template #icon>
      <icon :name="item.meta.icon" />
    </template>
    {{ item.meta.title }}
  </t-menu-item>

  <t-submenu
    v-if="item && item.children"
    :value="item.name"
    :title="item.meta.title"
  >
    <template #icon>
      <icon :name="item.meta.icon" />
    </template>
    <sidebar-item
      v-for="SidebarItem in item.children"
      :key="SidebarItem.name"
      :item="SidebarItem"
    ></sidebar-item>
  </t-submenu>
</template>

<script setup lang="ts">
import sidebarItem from "@/components/sidebaritem.vue";
import { Icon } from "tdesign-vue-next";
const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
});

console.log(props);
</script>
<style scoped></style>
