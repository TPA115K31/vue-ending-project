<template>
	<section
		class="flex items-center justify-center min-h-screen bg-white px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
	>
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<!-- 左侧区域 -->
			<div
				class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8"
			>
				<!-- 图 -->
				<div class="absolute inset-0">
					<img
						class="object-cover w-full h-full"
						src="@/assets/img/signup_1.png"
						alt=""
					/>
				</div>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
				></div>
				<!-- 小字 -->
				<div class="relative">
					<div
						class="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl"
					>
						<h3 class="text-4xl font-bold text-white">
							欢迎使用简历信息抽取系统
						</h3>
						<ul class="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
							<li class="flex items-center space-x-3">
								<div
									class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full"
								>
									<img
										class="w-3.5 h-3.5 text-white"
										src="@/assets/img/sign_icon_1.svg"
									/>
								</div>
								<span class="text-lg font-medium text-white">
									自动化信息抽取
								</span>
							</li>
							<li class="flex items-center space-x-3">
								<div
									class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full"
								>
									<img
										class="w-3.5 h-3.5 text-white"
										src="@/assets/img/sign_icon_1.svg"
									/>
								</div>
								<span class="text-lg font-medium text-white">
									信息统计可视化
								</span>
							</li>
							<li class="flex items-center space-x-3">
								<div
									class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full"
								>
									<img
										class="w-3.5 h-3.5 text-white"
										src="@/assets/img/sign_icon_1.svg"
									/>
								</div>
								<span class="text-lg font-medium text-white">
									高精度多模态大模型支撑
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 右侧区域 -->
			<div
				class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24"
			>
				<div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto min-w-96">
					<!-- 返回按钮 -->
					<button
						class="text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 my-4 rounded-md"
						@click="goBack()"
					>
						<img
							class="w-6 h-6"
							src="@/assets/img/sign_icon_4.svg"
						/>
					</button>
					<!-- 顶部信息 -->
					<h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
						注册账号
					</h2>
					<p class="mt-2 text-base text-gray-600">
						已经有账号了？
						<RouterLink
							to="/signin"
							class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
							>登录</RouterLink
						>
					</p>
					<!-- 表单 -->
					<div class="space-y-5 mt-8">
						<el-form
							:model="param"
							:rules="rules"
							ref="register"
							class="mt-8"
						>
							<!-- 账户 -->
							<div>
								<label
									for=""
									class="text-base font-medium text-gray-900"
								>
									账户名
								</label>
								<el-form-item
									prop="username"
									class="relative text-gray-400 focus-within:text-gray-600"
								>
									<el-input
										v-model="param.username"
										placeholder="请输入账户"
										class="block h-20 w-full py-4 text-black placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
									>
										<template #prepend>
											<img
												class="w-5 h-5"
												src="@/assets/img/sign_icon_2.svg"
											/>
										</template>
									</el-input>
								</el-form-item>
							</div>
							<!-- 密码 -->
							<div>
								<label
									for=""
									class="text-base font-medium text-gray-900"
								>
									密码
								</label>
								<el-form-item
									prop="password"
									class="relative text-gray-400 focus-within:text-gray-600"
								>
									<el-input
										type="password"
										v-model="param.password"
										placeholder="请输入密码"
										class="block h-20 w-full py-4 text-black placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										show-password
									>
										<template #prepend>
											<img
												class="w-5 h-5"
												src="@/assets/img/sign_icon_3.svg"
											/>
										</template>
									</el-input>
								</el-form-item>
							</div>
							<!-- 确认密码 -->
							<div>
								<label
									for=""
									class="text-base font-medium text-gray-900"
								>
									确认密码
								</label>
								<el-form-item
									prop="passwordconfirm"
									class="relative text-gray-400 focus-within:text-gray-600"
								>
									<el-input
										type="password"
										v-model="param.passwordconfirm"
										placeholder="请输入密码"
										class="block h-20 w-full py-4 text-black placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										@keyup.enter="submitForm()"
										show-password
									>
										<template #prepend>
											<img
												class="w-5 h-5"
												src="@/assets/img/sign_icon_3.svg"
											/>
										</template>
									</el-input>
								</el-form-item>
							</div>
							<!-- Btn -->
							<div>
								<el-form-item>
									<el-button
										type="primary"
										size="large"
										class="inline-flex items-center justify-center w-full px-4 py-8 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
										@click="submitForm()"
										>注册</el-button
									>
								</el-form-item>
							</div>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	import { ref, reactive } from "vue";
	import { ElMessage } from "element-plus";
	import { useRouter } from "vue-router";
	import axios from "axios";
	const router = useRouter();
	const param = reactive({
		username: "",
		password: "",
		passwordconfirm: "",
	});
	var validatePass = (rule, value, callback) => {
		if (value == "") {
			callback(new Error("请再次输入密码"));
		} else if (value !== param.password) {
			callback(new Error("两次输入密码不一致"));
		} else {
			callback();
		}
	};

	const rules = {
		username: [
			{
				required: true,
				message: "请输入用户名",
				trigger: "blur",
			},
		],
		password: [{ required: true, message: "请输入密码", trigger: "blur" }],
		passwordconfirm: [
			{ required: true, validator: validatePass, trigger: "blur" },
		],
	};
	const register = ref(null);
	const submitForm = () => {
		register.value.validate((valid) => {
			if (valid) {
				axios({
					method: "post",
					url: "http://127.0.0.1:8000/IRAS/UserRegister/",
					headers: {
						"Content-Type": "application/json",
					},
					data: {
						user_account: param.username,
						password: param.password,
						user_type: 1,
					},
				})
					.then((res) => {
						console.log(res);
						if (res.data.msg == "success") {
							ElMessage.success("注册成功");
							localStorage.setItem("ms_userid", res.data.user_id);
							localStorage.setItem("ms_username", param.username);
							localStorage.setItem("ms_usertype", "招聘者Recruiter");
							router.push("/");
						} else {
							ElMessage.error("注册失败，用户名重复");
						}
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				ElMessage.error("输入不规范");
			}
		});
	};
	const goBack = () => {
		router.go(-1);
	};
</script>
