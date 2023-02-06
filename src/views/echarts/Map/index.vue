<template>
  <t-card :bordered="false">
    <template #header>
      <div class="header">监测信息分布</div>
    </template>
    <div class="main-map">
      <div class="left-map">
        <ul class="left-map-ul">
          <li class="left-map-ul-li">
            <icon class="icon" name="logo-apple-filled"></icon>
            <div class="left-map-price">121次</div>
            <div class="left-map-name">apple</div>
          </li>

          <li class="left-map-ul-li">
            <icon class="icon" name="logo-android"></icon>
            <div class="left-map-price">23次</div>
            <div class="left-map-name">android</div>
          </li>
        </ul>
        <ul class="left-map-ul">
          <li class="left-map-ul-li">
            <icon class="icon" name="logo-github"></icon>
            <div class="left-map-price">121次</div>
            <div class="left-map-name">github</div>
          </li>

          <li class="left-map-ul-li">
            <icon class="icon" name="logo-qq"></icon>
            <div class="left-map-price">14次</div>
            <div class="left-map-name">qq</div>
          </li>
        </ul>
        <ul class="left-map-ul">
          <li class="left-map-ul-li">
            <icon class="icon" name="logo-wecom"></icon>
            <div class="left-map-price">53次</div>
            <div class="left-map-name">wecom</div>
          </li>

          <li class="left-map-ul-li">
            <icon class="icon" name="logo-ie-filled"></icon>
            <div class="left-map-price">2次</div>
            <div class="left-map-name">I E</div>
          </li>
        </ul>
      </div>
      <div class="right-map">
        <div ref="main" id="main" class="right-main"></div>
      </div>
    </div>
  </t-card>
</template>

<script setup lang="ts">
import { drawChart } from "@/composables/initEcharts";
import * as echarts from "echarts";
import { Icon } from "tdesign-vue-next";
import { onMounted, ref } from "vue";
const main = ref();

// 图表配置项

function init() {
  // 基于准备好的dom，初始化echarts实例
  let barTopColor = [
    "#CBB835",
    "#33C6E2",
    "#16B5FF",
    "#157FFE",
    "#8F48F0",
    "#CD597A",
  ];
  let barBottomColor = [
    "#D09311",
    "#279AB0",
    "#0B5FFF",
    "#154AD2",
    "#670BFF",
    "#90222D",
  ];
  var option = {
    // backgroundColor: "#051D44",
    title: {
      show: false,
      text: "监测信息分布",
      top: 10,
      left: "center",
      textStyle: {
        color: "#00eaff",
        fontSize: 18,
        fontWeight: "normal",
      },
    },
    tooltip: {
      trigger: "axis",
      formatter: "周使用次数<br>{b}：{c}",
      backgroundColor: "rgba(18, 57, 60, .8)", //设置背景颜色
      textStyle: {
        color: "#fff",
      },
      borderColor: "rgba(18, 57, 60, 1)",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(0, 11, 34, .4)",
        },
      },
    },
    grid: {
      top: "4%",
      bottom: "1%",
      left: "2%",
      right: "15%",
      containLabel: true,
    },
    xAxis: {
      data: ["apple", "android", "github", "qq", "wecom", "I E"],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#1C82C5",
        },
      },
      axisLabel: {
        show: true,
        rotate: 20,
        margin: 30,
        textStyle: {
          fontSize: 16,
          // color: "#DEEBFF",
          color: "#33C6E2", //title
          align: "center",
        },
      },
      interval: 0,
    },
    yAxis: {
      splitLine: {
        show: true,
        offset: false,
        lineStyle: {
          color: "rgba(28, 130, 197, .3)",
          // color:"#ccc"
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          // color: "#1C82C5",
          color: "#33C6E2",
          // color: "#ccc"
        },
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          fontSize: 12,
          // color: "#DEEBFF",
        },
      },
    },
    series: [
      {
        name: "周使用次数",
        type: "pictorialBar",
        symbolSize: [26, 10],
        symbolOffset: [0, -5],
        z: 1,
        itemStyle: {
          normal: {
            color: function (params: any) {
              return barBottomColor[params.dataIndex];
            },
          },
        },
        label: {
          show: true,
          position: "top",
          fontSize: 16,
        },
        symbolPosition: "end",
        data: [54, 23, 121, 14, 53, 2],
      },
      {
        name: "周使用次数",
        type: "pictorialBar",
        symbolSize: [26, 0],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
          normal: {
            color: function (params: any) {
              return barTopColor[params.dataIndex];
            },
          },
        },
        data: [54, 23, 121, 14, 53, 2],
      },
      {
        type: "bar",
        itemStyle: {
          normal: {
            color: function (params: any) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: barTopColor[params.dataIndex],
                },
                {
                  offset: 0,
                  color: barBottomColor[params.dataIndex],
                },
              ]);
            },
            opacity: 0.9,
          },
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: "-100%",
        data: [54, 23, 121, 14, 53, 2],
      },
    ],
  };

  drawChart(main, option);
}

onMounted(() => {
  //map
  init();
});
</script>
<style lang="less" scoped>
.header {
  font-size: 2rem;
  padding-left: 2rem;
  font-weight: 900;
}
.main-map {
  ul {
    list-style: none;
  }
  display: flex;
  .left-map {
    width: 14rem;
    // background: rgb(122, 10, 10);
    .left-map-ul {
      padding: 0;
      display: flex;
      // justify-content:space-between ;
      .left-map-ul-li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        .icon {
          font-size: 3rem;
          border: 0.1rem solid #161616;
          border-radius: 20%;
        }
        .left-map-name {
          font-size: 1.1rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
        }
      }
    }
  }

  .right-map {
    width: 80%;

    // background: #968e8e;
    .right-main {
      width: 100%;
      height: 100%;
      // background: #161616;
    }
  }
}
</style>
