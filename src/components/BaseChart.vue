<template>
	<div
		:data="props.data"
		ref="ech"
	></div>
</template>

<script setup>
	import { inject, onMounted, ref, watch } from "vue";

	const echarts = inject("echarts");
	const ech = ref();
	var ChartLineGraph = ref(null);

	const props = defineProps(["data"]);

	const drawLineGraph = (data) => {
		if (data) {
			ChartLineGraph.value = echarts.init(ech.value);
			ChartLineGraph.value.setOption(data);
			window.addEventListener("resize", () => {
				ChartLineGraph.value.resize();
			});
		}
	};

	onMounted(() => {
		drawLineGraph(props.data);
	});

	watch(
		() => props.data,
		(newvalue, oldvalue) => {
			drawLineGraph(newvalue);
		},
		{ deep: true }
	);
</script>
