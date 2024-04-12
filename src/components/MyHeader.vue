<template>
  <header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- lg+大屏 -->
      <nav class="flex items-center justify-between h-16 lg:h-20">
        <!-- logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="flex">
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
            to="user"
            class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            我的
          </RouterLink>

          <RouterLink
            to="statistic"
            class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            统计可视化
          </RouterLink>
        </div>
        <!-- 顶部登录-注册按钮 -->
        <RouterLink
          to="/signin"
          class="hidden mx-5 text-base font-semibold text-gray-600 transition-all duration-200 lg:inline-flex hover:text-opacity-80"
        >
          登录
        </RouterLink>
        <RouterLink
          to="/signup"
          class="hidden items-center justify-center px-4 py-3 mx-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
          role="button"
        >
          注册
        </RouterLink>
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

        <div class="px-6 mt-6">
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
import { ref } from "vue";
const menuOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>
