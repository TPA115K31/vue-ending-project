<template>
	<div
		class="px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8 relative z-20"
	>
		<el-row
			:gutter="24"
			type="flex"
			justify="center"
		>
			<el-col :span="6">
				<linegraph
					class="bbox"
					:data="option1"
					style="height: 350px"
				></linegraph>
				<linegraph
					class="bbox"
					:data="option2"
					style="height: 350px"
				></linegraph>
			</el-col>
			<el-col :span="12">
				<linegraph
					class="wbox"
					:data="option3"
					style="height: 700px"
				></linegraph>
			</el-col>
			<el-col :span="6">
				<linegraph
					class="bbox"
					:data="option4"
					style="height: 350px"
				></linegraph>
				<linegraph
					class="bbox"
					:data="option5"
					style="height: 350px"
				></linegraph>
			</el-col>
		</el-row>
	</div>
</template>
<script setup>
	import linegraph from "@/components/BaseChart.vue";
	import axios from "axios";
	import { onMounted, ref } from "vue";

	import {
		dy_geoOption,
		dy_pieOption_age,
		dy_pieOption_degree,
		dy_pieOption_school,
		dy_pieOption_year,
	} from "@/utils/dynamic_options.js";

	var option1 = ref(null);
	var option2 = ref(null);
	var option3 = ref(null);
	var option4 = ref(null);
	var option5 = ref(null);

	onMounted(() => {
		initCharts();
	});

	const dataProcess = (data) => {
		console.log(data.cities);
		option1.value = dy_pieOption_age(data.age_part);
		option2.value = dy_pieOption_school(data.school);
		option3.value = dy_geoOption(data.cities);
		option4.value = dy_pieOption_degree(data.degree_part);
		option5.value = dy_pieOption_year(data.years);
	};

	const initCharts = () => {
		axios
			.get("http://127.0.0.1:8000/IRAS/ResumeStatistic/", {
				params: {
					user_id: localStorage.getItem("ms_userid"),
				},
			})
			.then((res) => {
				console.log(res);
				if (res.data.msg == "success") {
					dataProcess(res.data.data);
				}
			});
	};
</script>
