<template>
  <t-card class="page">
    <div class="action-area">
      <t-button
        v-permission="PermissionEnum.USER_LIST_CREATE"
        @click="handleCreate"
        >创建用户</t-button
      >
      <div class="User-input">
        <div class="search-area">
          <t-input
            class="search-input"
            v-model="searchKry.name"
            placeholder="请输入需要检索的账号"
          ></t-input>
          <t-button @click="fetchDate">
            <template #icon>
              <icon name="search"></icon>
            </template>
          </t-button>
        </div>
        <div class="search-area">
          <t-input
            class="search-input"
            v-model="searchKry.email"
            placeholder="请输入需要检索的邮箱"
          ></t-input>
          <t-button @click="fetchDate">
            <template #icon>
              <icon name="search"></icon>
            </template>
          </t-button>
        </div>
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
      :pagination="pagination"
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
            v-permission="PermissionEnum.USER_LIST_DELETE"
          >
            <icon name="delete"></icon>
            删除
          </t-button>
        </t-popconfirm>
      </template>
      <template #roles="slotProps">
        <t-tag
          v-for="(role, index) in slotProps.row.roles"
          :key="index"
          theme="promay"
          variant="light"
          style="margin-right: 8px"
          >{{ "xxxx" }}</t-tag
        >
      </template>
    </t-table>
  </t-card>
  <editDialog
    :show="showDialog"
    :data="editData"
    @close="onDialogClose"
    @confirm="handleConfirm"
  ></editDialog>
</template>

<script setup lang="ts">
import editDialog from "@/views/User/edit-dialog.vue";
import { Icon } from "tdesign-vue-next";
import { PermissionEnum } from "@/config/permission.config";
import { useSearch } from "@/composables/useSearch";
import UserApi from "@/api/user";
import { reactive, ref } from "vue";
import type { UserCreateREquest, UserEdit, UserType } from "@/api/types";
import { useEditDialog } from "@/composables/useEditDialog";
import { ROLE_DICT } from "@/config/roles";
const columns = [
  { colKey: "_id", title: "ID" },
  { colKey: "email", title: "邮箱" },
  { colKey: "username", title: "账号" },
  { colKey: "roles", title: "角色" },
  { colKey: "operation", title: "操作" },
];
const sort = ref({
  sortBy: "_id",
  descending: true,
});

const searchKry = reactive({
  name: "",
  email: "",
});
const { data, pagination, Loading, fetchDate, onPageChange } = useSearch<
  UserType,
  {
    name: string;
  }
>(UserApi, searchKry);

const {
  showDialog,
  editData,
  handleCreate,
  handleEdit,
  handleDelete,
  onDialogClose,
  handleConfirm,
} = useEditDialog<any, UserCreateREquest>(UserApi, "用户");
</script>
<style scoped></style>
