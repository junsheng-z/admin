<template>
  <t-dialog
    :visible="visible"
    width="900px"
    header="用户管理"
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" :data="user" :rules="rules">
      <t-form-item label="邮箱" name="email">
        <!-- <t-input v-if="user.username" disabled :value="user.email"></t-input> -->
        <t-input
          v-model="user.email"
          placeholder="请输入邮箱"
          type="email"
        ></t-input>
      </t-form-item>

      <t-form-item label="账号" name="username">
        <!-- <t-input v-if="user.username" disabled :value="user.username"></t-input> -->
        <t-input
          v-model="user.username"
          placeholder="请输入账号"
          type="username"
        ></t-input>
      </t-form-item>

      <t-form-item label="密码" name="password">
        <t-input
          v-model="user.password"
          placeholder="请输入密码"
          type="password"
        ></t-input>
      </t-form-item>

      <t-form-item label="角色" name="roles">
        <t-select
          v-model="user.roles"
          :options="options"
          clearable
          multiple
        ></t-select>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import type { UserEdit } from "@/api/types";
import { computed, ref, watch } from "vue";
import type { Ref } from "vue";
interface Props {
  show: boolean;
  data: UserEdit | null;
}
const defaultData: UserEdit = {
  // id: "",
  username: "",
  password: "",
  email: "",
  roles: [],
  permissions: [],
};

const props = withDefaults(defineProps<Props>(), {
  show: false,
});
const options = computed(() => {
  return [
    { label: "超级管理员", value: "ROLE_ADMIN" },
    { label: "普通管理员", value: "ROLE_USER" },
  ];
});

const user: Ref<UserEdit> = ref(props.data || defaultData);
watch(props, (newValue) => {
  user.value = newValue.data || defaultData;
});

const rules = {
  username: [{ required: true, message: "账号必填", type: "error" }],
  password: [{ required: true, message: "密码必填", type: "error" }],
  email: [{ required: true, message: "格式必须为邮箱", type: "error" }],
};
const emit = defineEmits(["close", "confirm"]);
const visible = computed(() => props.show);

// ***todo
const from = ref(null);
const handleConfirm = () => {
  emit("confirm", user.value);
};
</script>
<style scoped></style>
