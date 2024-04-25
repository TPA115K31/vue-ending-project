<template>
	<div class="py-8 bg-white sm:py-8">
		<div
			class="flex flex-col justify-around content-around items-center px-12 mx-auto mt-4 max-w-7xl relative"
		>
			<div class="self-start">
				<h2 class="font-normal text-base">上传简历列表</h2>
			</div>
			<div class="flex flex-col w-full pt-4">
				<el-table
					:data="tableData"
					stripe
					class="w-full rounded-xl z-10 shadow-md hover:shadow-lg transition-all"
					ref="multipleTable"
					header-cell-class-name="table-header"
				>
					<el-table-column
						prop="resumecode"
						label="简历ID"
						width="70"
						align="center"
					></el-table-column>
					<el-table-column
						prop="resumename"
						label="简历名"
						align="center"
					></el-table-column>
					<el-table-column
						label="状态"
						align="center"
					>
						<template #default="scope">
							<el-tag
								:type="
									scope.row.state === '已解析'
										? 'success'
										: scope.row.state === '正在解析'
										? ''
										: 'danger'
								"
								>{{ scope.row.state }}</el-tag
							>
						</template>
					</el-table-column>
					<el-table-column
						label="操作"
						width="180"
						align="center"
					>
						<template #default="scope">
							<el-button
								type="primary"
								text
								@click="goTo(scope.$index, scope.row)"
							>
								查看
							</el-button>
							<el-button
								type="danger"
								text
								@click="handleDelete(scope.$index, scope.row)"
							>
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="self-end mt-8">
					<el-pagination
						layout="total, prev, pager, next"
						:current-page="query.pageIndex"
						:page-size="query.pageSize"
						:total="pageTotal"
						@current-change="handlePageChange"
					></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, reactive } from "vue";
	import { useRouter } from "vue-router";
	import { ElMessage, ElMessageBox } from "element-plus";
	import axios from "axios";

	const router = useRouter();
	var receiveData = new Array();
	const query = reactive({
		address: "",
		name: "",
		pageIndex: 1,
		pageSize: 10,
	});
	const tableData = ref([]);
	const pageTotal = ref(0);
	// 获取表格数据

	const goTo = (index, row) => {
		router.push({ path: "/resume", query: { resumecode: row.resumecode } });
	};

	const getData = () => {
		axios
			.get("http://127.0.0.1:8000/IRAS/FindUserResumes/", {
				params: {
					user_id: localStorage.getItem("ms_userid"),
					user_type: localStorage.getItem("ms_usertype"),
				},
			})
			.then((res) => {
				console.log(res);
				if (res.data.msg == "success") {
					receiveData = res.data.data;
					console.log(receiveData);
					tableData.value = receiveData;
					pageTotal.value = receiveData.length || 50;
				} else {
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	getData();

	// 分页导航
	const handlePageChange = (val) => {
		query.pageIndex = val;
		getData();
	};

	// 删除操作
	const handleDelete = (index, row) => {
		// 二次确认删除
		ElMessageBox.confirm("确定要删除吗？", "提示", {
			type: "warning",
		})
			.then(() => {
				console.log("here");
				axios
					.post("http://127.0.0.1:8000/IRAS/ResumeDelete/", {
						user_id: localStorage.getItem("ms_userid"),
						user_type: localStorage.getItem("ms_usertype"),
						code_list: [row.resumecode],
					})
					.then((res) => {
						console.log(res);
						if (res.data.msg == "success") {
							ElMessage.success("删除成功");
						} else {
							ElMessage.error("删除失败");
						}
					})
					.catch((error) => {
						console.log(error);
					})
					.finally(() => {
						getData();
					});
				// console.log(index + row)
				// console.log(row.resumecode +" "+ row.resumename +" "+ row.state)
			})
			.catch(() => {});
	};
</script>

<style scoped>
	.handle-box {
		margin-bottom: 20px;
	}

	.handle-select {
		width: 120px;
	}

	.handle-input {
		width: 300px;
		display: inline-block;
	}

	.red {
		color: #ff0000;
	}

	.mr10 {
		margin-right: 10px;
	}

	.table-td-thumb {
		display: block;
		margin: auto;
		width: 40px;
		height: 40px;
	}
</style>
