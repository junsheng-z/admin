<template>
  <div class="Pie-main" ref="PieRef">
    <div class="PieRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { drawChart } from "@/composables/initEcharts";
const PieRef = ref();
const Pie = () => {
  var legends = ["apple", "githup", "wecom", "android"];
  var colors = [
    "#0278e6",
    "#34d160",
    "#fcdf39",
    "#f19611",
    "#00c6ff",
    "#f76363",
  ].reverse();
  var data = [
    {
      name: "apple",
      value: 7,
    },
    {
      name: "githup",
      value: 6,
    },
    {
      name: "wecom",
      value: 14,
    },
    {
      name: "android",
      value: 4,
    },
  ];
  var total = data.reduce((prev, curr) => prev + curr.value, 0);
  const option = {
    // backgroundColor: "#081736",
    color: colors,
    legend: {
      orient: "vertical",
      top: "center",
      right: "23%",
      itemGap: 10,
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: "#081736",
        fontSize: 13,
      },
      data: legends,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "访问监控",
        type: "pie",
        radius: ["40%", "90%"],
        center: ["35%", "50%"],
        roseType: "radius",
        minShowLabelAngle: 10,
        label: {
          show: true,
          normal: {
            position: "outside",
            fontSize: 12,
            formatter: (params: { name: string; value: string }) => {
              return (
                params.name +
                //   '(' +
                //   ((params.value / total) * 100).toFixed(2) +
                //   '%)' +
                //   '\n' +
                params.value +
                "次"
              );
            },
          },
        },
        labelLine: {
          length: 1,
          length2: 5,
          smooth: true,
        },
        data: data,
      },
    ],
  };

  drawChart(PieRef, option);
};
onMounted(() => {
  Pie();
});
</script>
<style lang="less" scoped>
.Pie-main {
  height: 15.0031rem - 2rem;
  //   background: #ccc;
}
</style>
