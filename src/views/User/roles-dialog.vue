<template>
  <t-dialog
    :visible="visible"
    width="900px"
    header="角色管理"
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" :data="role" :rules="rules">
      <t-form-item label="邮箱" name="email">
        <!-- <t-input v-if="role.email" disabled :value="role.email"></t-input> -->
        <t-input
          v-model="role.email"
          placeholder="请输入邮箱"
          type="email"
        ></t-input>
      </t-form-item>

      <t-form-item label="账号" name="username">
        <!-- <t-input v-if="role.email" disabled :value="role.username"></t-input> -->
        <t-input
          v-model="role.username"
          placeholder="请输入账号"
          type="username"
        ></t-input>
      </t-form-item>

      <t-form-item label="密码" name="password">
        <t-input
          v-model="role.password"
          placeholder="请输入密码"
          type="password"
        ></t-input>
      </t-form-item>

      <t-form-item label="权限集" name="permissions">
        <t-tree
          :data="permissionsTree"
          hover
          expand-all
          :checkable="true"
          value-mode="all"
          v-model="role.permissions"
        ></t-tree>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import type { UserEdit } from "@/api/types";
import { computed, ref, watch } from "vue";
import type { Ref } from "vue";
import { permissionsTree } from "@/config/permission.config";
interface Props {
  show: boolean;
  data: UserEdit | null;
}
const defaultData: UserEdit = {
  username: "",
  password: "",
  email: "",
  roles: [],
  permissions: [],
};

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const role: Ref<UserEdit> = ref(props.data || defaultData);
watch(props, (newValue) => {
  role.value = newValue.data || defaultData;
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
  emit("confirm", role.value);
};
</script>
<style scoped></style>
