<template>
  <t-card
    class="info-card"
    size="medium"
    :bordered="false"
    :style="`--info-card-primary-color:${item.color}`"
  >
    <template #header>
      <div class="header">{{ item.title }}</div>
    </template>
    <div class="info">
      <div class="number">
        {{ item.number }}<span class="unit">{{ item.unit }}</span>
      </div>
      <icon class="icon" :name="item.icon"></icon>
    </div>
  </t-card>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import { defineProps } from "vue";
type item = {
  icon: string;
  title: string;
  color: string;
  number: number;
  unit: string;
};
interface Props {
  item: item;
}

defineProps<Props>();
</script>
<style lang="less" scoped>
.info-card {
  cursor: pointer;
  transition: 0.5s;
  .header {
    font-size: 18px;
    font-weight: bold;
  }

  .info {
    display: flex;
    justify-content: space-between;
    justify-items: baseline;

    .icon {
      font-size: 45px;
      color: var(--info-card-primary-color);
      transition: 0.3s;
    }
    .number {
      font-size: 40px;
      .unit {
        font-size: 16px;
        margin-left: 8px;
      }
    }
  }

  &:hover {
    background-color: var(--info-card-primary-color);
    color: aliceblue;
    transform: scale(1.01);
    top: -2px;
    .icon {
      color: aliceblue;
      transform: scale(1.3);
    }
  }
}
</style>
