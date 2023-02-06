<template>
  <div class="ranking-main">
    <div class="ranking-title">使用次数监控TOP5 (本周)</div>
    <div class="ranking-header">
      <div>排名</div>
      <div>软件名称</div>
      <div>使用名次</div>
    </div>

    <div class="ranking-center">
      <div class="ranking-center-list">1</div>
      <div>github</div>
      <div>121次</div>
    </div>

    <div class="ranking-center">
      <div class="ranking-center-list">2</div>
      <div>apple</div>
      <div>54次</div>
    </div>

    <div class="ranking-center">
      <div class="ranking-center-list">3</div>
      <div>wecom</div>
      <div>53次</div>
    </div>

    <div class="ranking-center">
      <div class="ranking-center-list">4</div>
      <div>QQ</div>
      <div>14次</div>
    </div>

    <div class="ranking-center">
      <div class="ranking-center-list">5</div>
      <div>I E</div>
      <div>2次</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="less" scoped>
.ranking-main {
  .ranking-title {
    font-size: 1.4rem;
    // padding-left: 2rem;
    font-weight: 900;
    color: rgb(0, 0, 0);
    margin-bottom: 2rem;
    padding-bottom: -1.12px;
  }
  .ranking-header {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem;
    border: 1px solid #ccc;
  }

  .ranking-center {
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.25s;
    border-bottom: 1px solid rgb(224, 221, 221, 0.3);

    .ranking-center-list {
      font-size: 2rem;
      padding: 11px;
      border: 1px solid rgb(100, 80, 80);
      border-radius: 20%;
      transition: 0.25s;
      background: rgb(86, 226, 68);
    }
  }
  .ranking-center:hover {
    background: rgb(79, 158, 79);
    color: aliceblue;
  }
}
</style>
