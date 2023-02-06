<template>
  <div class="RankingIndex-main">
    <div class="RankingIndex-title">访问次数</div>
    <div class="RankingIndex-header">
      <div><icon name="laptop"></icon>网站名称</div>
      <div class="RankingIndex-header-linear">|</div>
      <div><icon name="internet"></icon>访问指数</div>
    </div>
    <div class="RankingIndex-center">
      <div class="RankingIndex-name">apple使用次数</div>
      <div class="RankingIndex-number">54</div>
    </div>
    <div class="RankingIndex-center">
      <div class="RankingIndex-name">github使用次数</div>
      <div class="RankingIndex-number">99</div>
    </div>
    <div class="RankingIndex-center">
      <div class="RankingIndex-name">wecom使用次数</div>
      <div class="RankingIndex-number">14</div>
    </div>
    <div class="RankingIndex-center">
      <div class="RankingIndex-name">android使用次数</div>
      <div class="RankingIndex-number">53</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import { ref, reactive } from "vue";
</script>
<style lang="less" scoped>
.RankingIndex-main {
  .RankingIndex-title {
    font-size: 1.3rem;
    // padding-left: 2rem;
    font-weight: 900;
    color: rgb(0, 0, 0);
    padding-bottom: 10px;
  }
  .RankingIndex-header {
    display: flex;
    justify-content: space-around;
    border: 1px solid #ccc;
    background: #ccc;
    .RankingIndex-header-linear {
      color: rgb(146, 139, 139);
      font-size: 1.2rem;
    }
    div {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  .RankingIndex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    // border-bottom: 1px solid #ccc;
    padding-top: 1rem;
    width: 100%;
    .RankingIndex-name {
      width: 50%;
      margin-left: 2rem;
      // text-align: center;
    }
    .RankingIndex-number {
      width: 50%;
      text-align: center;
      // margin-right: 10px;
      // margin-left: 101px;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
