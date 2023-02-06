<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <t-row :gutter="[16, 16]">
    <t-col v-for="(item, index) in cards" :key="index" :span="3">
      <infoCard :item="item"></infoCard>
    </t-col>

    <t-col :span="8">
      <t-card>
        <div style="height: 500px" id="main"></div>
      </t-card>
    </t-col>
  </t-row>
</template>

<script setup lang="ts">
import infoCard from "@/components/infoCard.vue";


const cards = [
  {
    icon: "user",
    title: "新增用户",
    color: "#40c9c6",
    number: 194,
    unit: "位",
  },
  {
    "icon": "chat",
    "title": "今日消息",
    "color": "#36a3f7",
    "number": 127,
    "unit": "条",
  },
  {
    "icon": "user",
    "title": "营业额",
    "color": "#40c9c6",
    "number": 12631,
    "unit": "￥",
  },
  {
    "icon": "user",
    "title": "跨境订单",
    "color": "#40c9c6",
    "number": 12631,
    "unit": "￥",
  },
];
</script>
<style scoped></style>
