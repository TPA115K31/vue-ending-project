<template>
	<el-upload
		class="upload-demo rounded-lg border-4 border-dashed w-full h-64 group text-center content-center"
		ref="uploadRef"
		:action="upload.url"
		:data="upload.params"
		:auto-upload="false"
		:on-success="handleSuccess"
		multiple
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
	<div>
		<button
			type="submit"
			@click="handleSubmit"
			class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
		>
			上传
		</button>
	</div>
</template>
<script setup>
	import { reactive, ref } from "vue";

	const uploadRef = ref();

	const upload = reactive({
		url: "http://127.0.0.1:8000/IRAS/ResumeUpload2Interpret/",
		params: { user_id: 1, user_type: 1 },
	});

	const handleSuccess = () => {
		uploadRef.value.clearFiles();
	};

	const handleSubmit = () => {
		uploadRef.value.submit();
	};
</script>
