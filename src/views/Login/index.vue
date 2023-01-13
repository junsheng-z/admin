<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>JS-Admin</h1>
        <t-form
          ref="form"
          :data="data"
          :rules="rules"
          class="login-form"
          :colon="true"
          :label-width="0"
          @submit="handleLogin"
        >
          <t-form-item name="email">
            <t-input
              v-model="data.email"
              clearable
              placeholder="请输入管理员邮箱"
            >
              <template #prefix-icon>
                <icon name="logo-github-filled" />
              </template>
            </t-input>
          </t-form-item>

          <!-- 

          <t-form-item name="username">
            <t-input
              v-model="data.username"
              clearable
              placeholder="请输入账户名"
            >
              <template #prefix-icon>
                <icon name="user" />
              </template>
            </t-input>
          </t-form-item> -->

          <t-form-item name="password">
            <t-input
              type="password"
              v-model="data.password"
              clearable
              placeholder="请输入密码"
            >
              <template #prefix-icon>
                <icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" :loading="loading" block
              >登录</t-button
            >
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TokenRequest } from "@/api/types";
import { Icon, MessagePlugin } from "tdesign-vue-next";
import type { SubmitContext } from "tdesign-vue-next";
import { ref, reactive } from "vue";
import { useAppStore, useUserStore } from "@/store";
import { useRouter } from "vue-router";
const data = reactive<TokenRequest>({
  email: "admin@qq.com",
  // username: "admin3221",
  password: "123456",
});

const rules = {
  email: [
    {
      email: { ignore_max_length: true },
      required: true,
      message: "请输入正确的邮箱地址",
    },
  ],
  // username: [{ required: true, message: "账户名不能为空" }],
  password: [{ required: true, message: "密码不能为空" }],
};

const appStore = useAppStore();
const loading = ref<boolean>(false);
const router = useRouter();
const userStore = useUserStore();
const handleLogin = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return;
  }
  loading.value = true;
  try {
    await appStore.login(data);
    await userStore.fetchCurrentUser();
    await MessagePlugin.success("登录成功");
    await router.push({ name: "home" });

  } finally {
    loading.value = false;
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 131.4px;
  .content {
    width: 400px;
    height: 300px;
    h1 {
      text-align: center;
      color: rgb(150, 77, 18);
      font-weight: 900;
    }
    .login-form {
      padding-top: 20px;
    }
  }
}
</style>
