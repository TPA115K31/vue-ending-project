<template>
	<div
		class="flex flex-col justify-around content-around items-center px-12 mx-auto mt-4 max-w-7xl relative"
	>
		<button
			class="self-start text-sm font-semibold transition-all duration-200 bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 my-4 rounded-md"
			@click="goBack()"
		>
			<img
				class="w-6 h-6"
				src="@/assets/img/sign_icon_4.svg"
			/>
		</button>
		<div class="flex flex-col justify-around w-full">
			<el-descriptions
				class="rounded-xl z-10 shadow-md hover:shadow-lg transition-all"
				title="基本信息"
				direction="vertical"
				:column="6"
				:size="size"
				border
			>
				<el-descriptions-item
					label="姓名"
					:span="1"
					label-align="center"
					align="center"
					>{{ name }}</el-descriptions-item
				>
				<el-descriptions-item
					label="年龄"
					:span="1"
					label-align="center"
					align="center"
					>{{ age }}</el-descriptions-item
				>
				<el-descriptions-item
					label="出生日期"
					:span="1"
					label-align="center"
					align="center"
					>{{ birthday }}</el-descriptions-item
				>
				<el-descriptions-item
					label="籍贯"
					label-align="center"
					align="center"
					>{{ jiguan }}</el-descriptions-item
				>
				<el-descriptions-item
					label="政治面貌"
					label-align="center"
					align="center"
					>{{ zhengzhi }}</el-descriptions-item
				>
				<el-descriptions-item
					label="学历"
					label-align="center"
					align="center"
				>
					<el-tag>{{ xueli }}</el-tag>
				</el-descriptions-item>
				<el-descriptions-item
					label="毕业院校"
					:span="2"
					label-align="center"
					align="center"
					><el-tag>{{ school }}</el-tag></el-descriptions-item
				>
				<el-descriptions-item
					label="邮箱"
					:span="2"
					label-align="center"
					align="center"
					>{{ mail }}</el-descriptions-item
				>
				<el-descriptions-item
					label="电话"
					:span="2"
					label-align="center"
					align="center"
					>{{ phone }}</el-descriptions-item
				>
				<el-descriptions-item
					label="技能专长"
					:span="8"
					label-align="center"
					align="center"
				>
					<p v-for="item in skill">{{ item }}</p>
				</el-descriptions-item>
				<el-descriptions-item
					label="荣誉奖项"
					:span="8"
					label-align="center"
					align="center"
				>
					<p v-for="item in honor">{{ item }}</p>
				</el-descriptions-item>
			</el-descriptions>

			<el-descriptions
				class="rounded-xl z-10 shadow-md hover:shadow-lg transition-all"
				v-for="item in school_exp"
				title="教育背景"
				:column="3"
				border
				direction="vertical"
			>
				<el-descriptions-item
					label="时间"
					:span="1"
					label-align="center"
					align="center"
					>{{ item.时间 }}</el-descriptions-item
				>
				<el-descriptions-item
					label="就读学校"
					:span="1"
					label-align="center"
					align="center"
					><el-tag>{{ item.就读学校 }}</el-tag></el-descriptions-item
				>
				<el-descriptions-item
					label="就读专业"
					:span="1"
					label-align="center"
					align="center"
					><el-tag>{{ item.就读专业 }}</el-tag></el-descriptions-item
				>
			</el-descriptions>

			<el-descriptions
				class="rounded-xl z-10 shadow-md hover:shadow-lg transition-all"
				v-for="(item,index) in work_exp"
				title="工作经历"
				:column="3"
				border
				direction="vertical"
			>
				<el-descriptions-item
					label="时间"
					:span="1"
					label-align="center"
					align="center"
					>{{ item.时间 }}</el-descriptions-item
				>
				<el-descriptions-item
					label="公司"
					:span="1"
					label-align="center"
					align="center"
					><el-tag>{{ item.公司 }}</el-tag></el-descriptions-item
				>
				<el-descriptions-item
					label="职位"
					:span="1"
					label-align="center"
					align="center"
					><el-tag>{{ item.职位 }}</el-tag></el-descriptions-item
				>
				<el-descriptions-item
					label="工作内容"
					:span="8"
					label-align="center"
					align="center"
					>{{ item.工作内容 }}</el-descriptions-item
				>
			</el-descriptions>
		</div>
	</div>
</template>
<script setup>
	import { onMounted, reactive, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import axios from "axios";

	const route = useRoute();
	const router = useRouter();
	let name = ref("无");
	let age = ref("无");
	let phone = ref("无");
	let birthday = ref("无");
	let mail = ref("无");
	let jiguan = ref("无");
	let zhengzhi = ref("无");
	let xueli = ref("无");
	let school = ref("无");
	let skill = ref("无");
	let honor = ref("无");
	let school_exp = reactive([]);
	let work_exp = reactive([]);

	onMounted(() => {
		axios
			.get("http://127.0.0.1:8000/IRAS/SingleResumePresent/", {
				params: {
					resumecode: route.query.resumecode,
				},
			})
			.then((res) => {
				console.log(res);
				if (res.data.msg == "success") {
					var receiveData = res.data.data;
					console.log(receiveData);
					dataProcess(receiveData);
				} else {
				}
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const goBack = () => {
		router.push("/user");
	};
	const dataProcess = (data) => {
		name.value = data.姓名;
		age.value = data.年龄;
		birthday.value = data.出生日期;
		jiguan.value = data.籍贯;
		zhengzhi.value = data.政治面貌;
		xueli.value = data.最高学历;
		school.value = data.学校;
		mail.value = data.邮箱;
		phone.value = data.电话;
		skill.value = data.技能专长;
		honor.value = data.荣誉奖项;
		for (var i = 0; i < data.教育背景.length; i++) {
			school_exp.push(data.教育背景[i]);
		}
		for (var i = 0; i < data.工作经历.length; i++) {
			work_exp.push(data.工作经历[i]);
		}
		// console.log(school_exp);
		// console.log(work_exp);
	};
</script>
