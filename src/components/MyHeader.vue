<template>
	<header class="pb-6 bg-white lg:pb-0">
		<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<!-- lg+大屏 -->
			<nav class="flex items-center justify-between h-16 lg:h-20">
				<!-- logo -->
				<div class="flex-shrink-0">
					<RouterLink
						to="/"
						class="flex"
					>
						<img
							class="w-auto h-12 lg:h-12"
							src="@/assets/img/logo.svg"
							alt=""
						/>
					</RouterLink>
				</div>
				<!-- 导航按钮 -->
				<div
					class="hidden lg:flex lg:items-center lg:justify-center lg:mx-auto lg:space-x-10"
				>
					<RouterLink
						to="/"
						class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
					>
						首页
					</RouterLink>

					<RouterLink
						to="/Upload"
						class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
					>
						上传
					</RouterLink>

					<RouterLink
						v-if="loginState"
						to="user"
						class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
					>
						我的
					</RouterLink>

					<RouterLink
						v-if="loginState"
						to="statistic"
						class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
					>
						统计可视化
					</RouterLink>
				</div>
				<!-- 顶部登录-注册按钮 -->
				<RouterLink
					v-if="!loginState"
					to="/signin"
					class="hidden mx-5 text-base font-semibold text-gray-600 transition-all duration-200 lg:inline-flex hover:text-opacity-80"
				>
					登录
				</RouterLink>
				<RouterLink
					v-if="!loginState"
					to="/signup"
					class="hidden items-center justify-center px-4 py-3 mx-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
					role="button"
				>
					注册
				</RouterLink>
				<!-- 登录后头像 -->
				<div
					v-if="loginState"
					class="flex flex-col relative p-4 hover:shadow-lg rounded-2xl cursor-pointer transition-all duration-200"
				>
					<div
						@click="toggleAvatar"
						class="flex items-center justify-between"
					>
						<div class="flex items-center mr-auto">
							<div class="inline-flex w-12 h-12">
								<div>
									<el-avatar
										src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
									/>
								</div>
							</div>
							<div class="flex flex-col ml-3 min-w-0">
								<div class="font-medium leading-none text-gray-700">
									{{ username }}
								</div>
							</div>
						</div>
					</div>

					<!-- 头像点击菜单 -->
					<ul
						v-show="avatarOpen"
						class="absolute top-20 left-1 z-10 min-w-24 mt-2 flex flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
					>
						<button
							@click="signout"
							class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
						>
							<img
								class="h-4 w-4"
								src="@/assets/img/header_icon_1.svg"
							/>
							<p
								class="block font-sans text-red-600 text-sm font-normal leading-normal text-inherit antialiased"
							>
								登出
							</p>
						</button>
					</ul>
				</div>

				<!-- 小屏幕菜单按钮 -->
				<button
					type="button"
					class="inline-flex ml-1 p-2 text-black transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-100 hover:bg-gray-100"
					@click="toggleMenu"
				>
					<!-- Menu open: "hidden", Menu closed: "block" -->
					<svg
						v-show="!menuOpen"
						class="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 8h16M4 16h16"
						/>
					</svg>

					<!-- Menu open: "block", Menu closed: "hidden" -->
					<svg
						v-show="menuOpen"
						class="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</nav>

			<!-- sm-lg 小屏-大屏 -->
			<nav
				class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden"
				:class="{ hidden: !menuOpen }"
			>
				<div class="flow-root">
					<div class="flex flex-col px-6 -my-2 space-y-1">
						<RouterLink
							to="/"
							class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
						>
							首页
						</RouterLink>
						<RouterLink
							to="/Upload"
							class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
						>
							上传
						</RouterLink>
						<RouterLink
							to="/user"
							class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
						>
							我的
						</RouterLink>
						<RouterLink
							to="/statistic"
							class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
						>
							统计可视化
						</RouterLink>
					</div>
				</div>

				<div
					v-show="!loginState"
					class="px-6 mt-6"
				>
					<RouterLink
						to="/signin"
						class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
						role="button"
					>
						立即体验
					</RouterLink>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { useRouter } from "vue-router";
	const router = useRouter;
	const loginState = ref(false);
	const username = ref();
	const menuOpen = ref(false);
	const avatarOpen = ref(false);
	const toggleMenu = () => {
		menuOpen.value = !menuOpen.value;
	};
	const toggleAvatar = () => {
		avatarOpen.value = !avatarOpen.value;
	};
	const signout = () => {
		loginState.value = false;
		localStorage.removeItem("ms_username");
		localStorage.removeItem("ms_userid");
		router.push("/");
	};

	onMounted(() => {
		if (localStorage.getItem("ms_userid")) {
			loginState.value = true;
			username.value = localStorage.getItem("ms_username");
		}
	});
</script>
