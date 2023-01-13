<template>
  <div>
    <t-layout class="layout-mamin">
      <side-bar></side-bar>
      <t-layout>
        <header-vue></header-vue>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import sideBar from "./sidebar.vue";
import headerVue from "@/views/common/header.vue";
import { ref, reactive } from "vue";
</script>
<style lang="less" scoped>
.layout-mamin {
    // width: 100vw;
    height: 100vh;
}
</style>
