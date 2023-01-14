<template>
  <div>用户管理</div>
  <t-button v-permission="PermissionEnum.USER_LIST_CREATE">创建用户</t-button>
</template>

<script setup lang="ts">
import { PermissionEnum } from "@/config/permission.config";
import { ref, reactive } from "vue";
</script>
<style scoped></style>
