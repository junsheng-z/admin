<template>
  <ErrorPage title="404无法找到该页面" description="抱歉您访问的页面不存在">
    <template #image>
        <img src="@/assets/imgs/not-found.png"/>
    </template>
  </ErrorPage>
</template>

<script setup lang="ts">
import ErrorPage from "@/components/ErrorPage.vue";
import { ref, reactive } from "vue";
</script>
<style scoped></style>
