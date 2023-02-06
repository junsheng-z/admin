<template>
  <t-card class="page">
    <div class="button">
      <t-button
        @click="cardbutton"
        v-permission="PermissionEnum.USER_LIST_CREATE"
        >创建card数据</t-button
      >
    </div>
    <t-table :loading="Loading" row-key="index" :data="data" :columns="columns">
      <template #operation="slotProps">
        <t-button variant="text" theme="primary" @click="handleCard(slotProps)">
          <icon name="edit"></icon>
          编辑
        </t-button>

        <t-popconfirm content="确认删除吗" @confirm="DeleteCard(slotProps)">
          <t-button variant="text" theme="primary">
            <icon name="delete"></icon>
            删除
          </t-button>
        </t-popconfirm>
      </template>
    </t-table>
  </t-card>
  <cardDialog
    @close1="handle1"
    @onConfirm="handleConfirm"
    :show="showDialog"
    :data="editData"
    :on-close="onDialogClose"
  ></cardDialog>
</template>

<script setup lang="ts">
import { PermissionEnum } from "@/config/permission.config";
import cardDialog from "./card-dialog.vue";
import { CaredEditDialog } from "@/composables/Card";
// import type { CardType } from "@/api/types";
import CardApi from "@/api/Card";



const {
  cardbutton,
  handleCard,
  handleConfirm,
  handle1,
  columns,
  data,
  showDialog,
  editData,
  DeleteCard,
  Loading,
  onDialogClose,
} = CaredEditDialog(CardApi, "admin");
</script>
<style scoped></style>
