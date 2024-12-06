<template>
  <div ref="chartDom" style="width: 100%; height: 400px;"></div>
</template>
<!--

<script lang="ts">
import echarts from 'echarts/types/dist/echarts';
import { onMounted, nextTick, ref } from 'vue';

export default {
  setup() {
    const chartDom = ref<HTMLElement | null>(null);
    const chartOptions = ref({
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }]
    });

    onMounted(() => {
      nextTick(() => {
        if (chartDom.value) {
          const myChart = echarts.init(chartDom.value);
          myChart.setOption(chartOptions.value);
        }
      });
    });

    return { chartDom, chartOptions };
  }
};

</script> -->