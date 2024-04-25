<template>
	<RouterView></RouterView>
</template>

<script setup>
	import { RouterView } from "vue-router";
	import * as echarts from "echarts";
	import china from "./assets/China.json";
	import { provide } from "vue";
	
	echarts.registerMap("china", china);
	provide("echarts", echarts);
</script>
