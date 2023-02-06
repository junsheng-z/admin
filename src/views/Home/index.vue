<template>
  <t-row :gutter="[16, 16]">
    <t-col v-for="(card, index) in cardStore.card?.data" :key="index" :span="3">
      <InfoCard :info="card"></InfoCard>
    </t-col>

    <t-col :span="8">
      <MapCard></MapCard>
    </t-col>
    <t-col :span="4">
      <t-card :bordered="false">
        <rankingList></rankingList>
      </t-card>
    </t-col>

    <t-col :span="4">
      <t-card :bordered="false">
        <RankingIndex></RankingIndex>
      </t-card>
    </t-col>
    <t-col :span="4">
      <t-card :bordered="false">
        <Pie></Pie>
      </t-card>
    </t-col>
    <t-col :span="4">
      <t-card :bordered="false"><Barpie></Barpie></t-card>
    </t-col>

    <!-- <t-col :span="12">
      <t-card :bordered="false"><Stack></Stack></t-card>
    </t-col>

    <t-col :span="12">
      <t-card :bordered="false"><div>1111</div></t-card>
    </t-col> -->
  </t-row>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import { usecardStore } from "@/store";
import MapCard from "@/views/echarts/Map/index.vue";
import rankingList from "@/views/echarts/ranking/rankingList.vue";
import RankingIndex from "../echarts/ranking/RankingIndex.vue";
import Pie from "../echarts/ranking/Pie.vue";
import Barpie from "../echarts/ranking/Barpie.vue";
import { onMounted } from "vue";
// import Stack from "../echarts/Stackbarchart/Stack.vue";
const cardStore = usecardStore();
onMounted(() => {
  cardStore.fetchCurrentCard();
});
</script>
<style lang="less" scoped>
.box {
  margin: 10px;
}
</style>
