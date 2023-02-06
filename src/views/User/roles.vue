<template>
  <t-card class="page">
    <div class="action-area">
      <t-button
        v-permission="PermissionEnum.USER_ROLES_CREATE"
        @click="handleCreate"
        >创建角色权限</t-button
      >
      <div class="search-area">
        <t-input
          class="search-input"
          v-model="searchKry.name"
          placeholder="请输入需要检索的角色邮箱"
        ></t-input>
        <t-button @click="fetchDate">
          <template #icon>
            <icon name="search"></icon>
          </template>
        </t-button>
      </div>
    </div>
    <!-- row-Key="index"
        :data="data" -->
    <t-table
      :sort="sort"
      :loading="Loading"
      :columns="columns"
      :data="data"
      rowKey="index"
      @page-change="onPageChange"
    >
      <template #operation="slotProps">
        <t-button
          variant="text"
          theme="primary"
          @click="handleEdit(slotProps)"
          v-permission="PermissionEnum.USER_LIST_EDIT"
        >
          <icon name="edit"></icon>
          编辑
        </t-button>
        <t-popconfirm content="确认删除吗" @confirm="handleDelete(slotProps)">
          <t-button
            variant="text"
            theme="primary"
            @click="fetchDate"
            v-permission="PermissionEnum.USER_LIST_DELETE"
          >
            <icon name="delete"></icon>
            删除
          </t-button>
        </t-popconfirm>
      </template>
    </t-table>
  </t-card>
  <rolesView
    :show="showDialog"
    :data="editData"
    @close="onDialogClose"
    @confirm="handleConfirm"
  ></rolesView>
</template>

<script setup lang="ts">
import rolesView from "@/views/User/roles-dialog.vue";

import { Icon } from "tdesign-vue-next";
import { PermissionEnum } from "@/config/permission.config";
import { useSearch } from "@/composables/useSearch";
import rolesApi from "@/api/user";
import { reactive, ref } from "vue";
import type { UserCreateREquest, UserEdit, UserType } from "@/api/types";
import { useEditDialog } from "@/composables/useEditDialog";
const columns = [
  { colKey: "email", title: "邮箱" },
  { colKey: "roles", title: "角色" },
  { colKey: "operation", title: "操作" },
];
const sort = ref({
  sortBy: "_id",
  descending: true,
});
const searchKry = reactive({
  name: "",
});
const { data, Loading, fetchDate, onPageChange } = useSearch<
  UserType,
  {
    name: string;
  }
>(rolesApi, searchKry);

const {
  showDialog,
  editData,
  handleCreate,
  handleEdit,
  onDialogClose,
  handleDelete,
  handleConfirm,
} = useEditDialog<any, UserCreateREquest>(rolesApi, "用户");
</script>
<style scoped></style>
