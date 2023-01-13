<template>
  <t-aside :width="useStore.menuCollapse ? '64px' : '232px'">
    <t-menu :collapsed="useStore.menuCollapse">
      <t-menu-item  value="0">
        <template #icon>
          <t-icon name="app" />
        </template>
        仪表盘
      </t-menu-item>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store"
import { ref, reactive } from "vue";

const useStore = useAppStore()
</script>
<style scoped></style>
