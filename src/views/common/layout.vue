<template>
  <div>
    <t-layout class="layout-mamin">
      <side-bar></side-bar>
      <t-layout>
        <header-vue></header-vue>
        <t-content><router-view></router-view></t-content>
        <t-footer style="text-align: center"
          >Copyright @ 2022-2023 JS_Admin.</t-footer
        >
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import sideBar from "./sidebar.vue";
import headerVue from "@/views/common/header.vue";
import PageLayout from "@/views/common/PageLayout.vue";
import { ref, reactive } from "vue";
</script>
<style lang="less" scoped>
.layout-mamin {
  // width: 100vw;
  height: 100vh;
}
</style>
