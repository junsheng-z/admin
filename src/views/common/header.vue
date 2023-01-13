<template>
  <t-header class="header-button">
    <collapse-button v-model:collapse="appStore.menuCollapse"></collapse-button>
    <div class="right-button">
      <t-dropdown
        :options="[
          { content: '退出登录', value: 1 },
          { content: '工资+1块', value: 2 },
        ]"
        @click="clickHandler"
      >
        <t-button theme="default" variant="text">
          <template #icon> <icon name="user"></icon></template
          ><span>
            {{ userStore.currentUser && userStore.currentUser.data.user.name }}
          </span>
        </t-button>
      </t-dropdown>
    </div>
  </t-header>
</template>

<script setup lang="ts">
import { useAppStore, useUserStore } from "@/store";
import { Icon, MessagePlugin } from "tdesign-vue-next";
import type { DropdownOption } from "tdesign-vue-next";
import CollapseButton from "@/components/CollapseButton.vue"
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const appStore = useAppStore();
const router = useRouter();
const route = useRoute();
const clickHandler = async ({ value }: DropdownOption) => {
  switch (value) {
    case 1:
      await appStore.logout();
      await router.push(`/login?redirect=${route.fullPath}`);
      MessagePlugin.success("退出登录成功");
      break;
    case 2:
      MessagePlugin.success("工资+1");
      break;
    default:
      MessagePlugin.error("该指令无效！");
      throw new Error("该指令无效！");
  }
};
</script>
<style lang="less" scoped>
.header-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
