<template>
  <div class="BarPie-main" ref="BarPie">
    <div class="PieRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { drawChart } from "@/composables/initEcharts";
const BarPie = ref();
const Pie = () => {
  var colorList = ["#51C3A2", "#409FC4", "#5071DC", "#3A478E"];
  var option = {
    // backgroundColor: "#034380",
    calculable: true,
    color: colorList,
    series: [
      {
        name: "漏斗图",
        type: "funnel",
        left: "15%",
        right: "25%",
        top: "0%",
        bottom: "0%",
        minSize: "0%",
        maxSize: "100%",
        sort: "ascending",
        label: {
          show: true,
          formatter: "{a|{c}}\n{b|{b}}",
          rich: {
            a: {
              color: "rgba(222,240,255,1)",
              fontSize: 30,
            },
            b: {
              color: "rgba(101,166,196,1)",
              fontSize: 14,
            },
          },
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        data: [
          { value: 1, name: "github" },
          { value: 2, name: "apple" },
          { value: 3, name: "wecom" },
          { value: 4, name: "QQ" },
        ],
      },
    ],
  };

  drawChart(BarPie, option);
};
onMounted(() => {
  Pie();
});
</script>
<style lang="less" scoped>
.BarPie-main {
  height: 15.0031rem - 2rem;
  //   background: #ccc;
}
</style>
