<template>
  <ErrorPage
    title="403无权访问"
    description="您当前无权限访问该页面， 若有疑问请联系网站管理员 wx:xxxxxxxxxxxxx"
  >
    <template #image>
      <img src="@/assets/imgs/not-allowed.png" />
    </template>
  </ErrorPage>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style scoped></style>
