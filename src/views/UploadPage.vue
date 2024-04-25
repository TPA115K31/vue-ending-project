<template>
	<div class="py-10 bg-white sm:py-16 lg:py-24">
		<div
			class="flex flex-col sm:flex-row justify-around content-around items-center px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8 relative z-20"
		>
			<!-- 左侧区域 -->
			<div
				class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 border shadow-md"
			>
				<!-- title -->
				<div class="text-center">
					<h2 class="mt-5 text-3xl font-bold text-gray-900">简历内容上传</h2>
				</div>
				<div class="mt-8 space-y-3">
					<el-form>
						<div class="grid grid-cols-1 space-y-2">
							<label class="text-sm font-bold text-gray-500 tracking-wide"
								>输入文字</label
							>
							<el-form-item>
								<div class="flex items-center justify-center w-full">
									<el-input
										v-model="textarea"
										:rows="11"
										resize="none"
										type="textarea"
										class="rounded-lg border-4 border-dashed w-full h-64 text-center content-center"
										placeholder="键入此处"
									/>
								</div>
							</el-form-item>
						</div>
						<p class="text-sm text-gray-300">
							<span>tips:&nbsp试试发送自我介绍内容</span>
						</p>
						<div>
							<button
								@click="submitForm()"
								class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
							>
								上传
							</button>
						</div>
					</el-form>
				</div>
			</div>

			<!-- 右侧区域 -->
			<div
				class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 border shadow-md"
			>
				<div class="text-center">
					<h2 class="mt-5 text-3xl font-bold text-gray-900">简历文件上传</h2>
				</div>
				<div class="grid grid-cols-1 space-y-2 mt-8">
					<label class="text-sm font-bold text-gray-500 tracking-wide"
						>添加文档</label
					>
					<el-upload
						class="upload-demo rounded-lg border-4 border-dashed w-full h-64 group text-center content-center"
						ref="uploadRef"
						:file-list="fileList"
						:limit="fileLimit"
						:on-exceed="handleExceed"
						:on-change="handleChange"
						:on-remove="handleRemove"
						multiple
						limit="5"
						:auto-upload="false"
						drag
					>
						<el-icon class="el-icon--upload">
							<img
								class="w-8 h-8"
								src="@/assets/img/upload_icon_1.svg"
							/>
						</el-icon>
						<div class="el-upload__text">拖拽上传 或者 <em>点击上传</em></div>
					</el-upload>
				</div>
				<p class="text-sm text-gray-300">
					<span>请选择大小不超过5MB的PDF文件</span>
				</p>
				<div>
					<button
						type="submit"
						@click="submitUpload"
						class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
					>
						上传
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { reactive, ref } from "vue";
	import axios from "axios";
	var fileList = reactive([]);
	const fileLimit = 5;
	const textarea = ref("");
	const uploadRef = ref();

	const submitForm = () => {
		const str = textarea;
		console.log(str);
		if (str.length !== 0) {
			const fileContent = new File([str], "Text.txt", { type: "text/plain" });
			const file = new FileReader(fileContent);
			// console.log(file);
			const formData = new FormData();
			formData.append("user_id", localStorage.getItem("ms_userid"));
			formData.append("user_type", localStorage.getItem("ms_usertype"));
			formData.append("file", fileContent);
			// console.log(formData);
			textarea = "";
			ElMessage.success("已上传服务器，请等待解析");
			MultipartFile(formData)
				.then((res) => {
					console.log(res);
					if (res.data.msg == "success") {
						ElNotification({
							title: "解析完成！",
							message: "您的简历解析完成，请前往上传简历列表查看",
							type: "success",
						});
					} else {
						ElNotification({
							title: "解析失败！",
							message: "很抱歉您的简历解析失败了，请重新上传",
							type: "error",
						});
					}
				})
				.catch((err) => {
					console.log(err);
					ElMessage.error("出错了，请尝试重新上传！");
				});
		} else {
			ElMessage.error("请输入合适的简历文本！");
		}
	};
	// 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
	const handleChange = (uploadfile, uploadfileList) => {
		// 对选中的文件做判断
		if (uploadfile.raw.type !== "application/pdf") {
			upload.value.handleRemove(uploadfile);
			ElMessage.warning("仅能上传.pdf文件");
			return;
		} else if (uploadfile.raw.size > 1024 * 1024 * 5) {
			upload.value.handleRemove(uploadfile);
			ElMessage.warning("仅能上传不超过5M的文件");
			return;
		}
		fileList = uploadfileList;
		console.log(fileList);
	};
	// 文件列表移除文件时的钩子
	const handleRemove = (uploadfile, uploadfileList) => {
		console.log("移除", uploadfile, uploadfileList);
		fileList = uploadfileList;
	};
	// 文件超出个数限制时的钩子
	const handleExceed = (uploadfiles, uploadfileList) => {
		ElMessage.warning("当前限制选择" + String(fileLimit) + "个文件");
	};
	// 提交文件
	const submitUpload = () => {
		if (fileList.length !== 0) {
			const formData = new FormData();
			formData.append("user_id", localStorage.getItem("ms_userid"));
			formData.append("user_type", localStorage.getItem("ms_usertype"));
			fileList.forEach((item, index) => {
				formData.append("file", item.raw);
				console.log(item.raw, item);
			});
			ElMessage.success("已上传服务器，请等待解析");
			fileList = [];
			MultipartFile(formData)
				.then((res) => {
					console.log(res);
					if (res.data.msg == "success") {
						ElNotification({
							title: "解析完成！",
							message: "您的简历解析完成，请前往上传简历列表查看",
							type: "success",
						});
					} else {
						ElNotification({
							title: "解析失败！",
							message: "很抱歉您的简历解析失败了，请重新上传",
							type: "error",
						});
					}
					uploadRef.value.clearFiles();
				})
				.catch((err) => {
					console.log(err);
					ElMessage.error("出错了，请尝试重新上传！");
				});
		} else {
			ElMessage.error("当前上传列表为空！请选择上传文件");
		}
	};
	// 上传接口
	const MultipartFile = (data) => {
		return axios({
			method: "post",
			url: "http://127.0.0.1:8000/IRAS/ResumeUpload2Interpret/",
			headers: { "Content-Type": "multipart/form-data" },
			data,
		});
	};
</script>
