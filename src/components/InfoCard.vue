<template>
  <t-card
    class="info-card"
    size="medium"
    :style="`--info-card-primary-color: ${info.color}`"
    :bordered="false"
  >
    <template #header>
      <div class="header">
        {{ info.title }}
      </div>
    </template>
    <div class="info">
      <div class="number">
        {{ info.number }}
        <span class="unit">
          {{ info.unit }}
        </span>
      </div>
      <icon class="icon" :name="info.icon"></icon>
    </div>
  </t-card>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import { ref, reactive } from "vue";

interface Props {
  info: Info;
}
type Info = {
  icon: string;
  title: string;
  color: string;
  number: number;
  unit: string;
};

defineProps<Props>();
</script>
<style lang="less" scoped>
.info-card {
  cursor: pointer;
  transition: 0.3s;
  .header {
    font-size: 16px;
    font-weight: bolder;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: 45px;
      color: var(--info-card-primary-color);
      transition: 0.7s;
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
    color: #fff;
    margin-top: -4px;
    .icon {
      color: #fff;
      transform: scale(1.3);
    }
  }
}
</style>
