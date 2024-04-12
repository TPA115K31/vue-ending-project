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
            class="object-cover object-top w-full h-full"
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
          <button
            class="text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 my-4 rounded-md"
          >
            <img class="w-6 h-6" src="@/assets/img/sign_icon_4.svg" />
          </button>

          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
            登入系统
          </h2>

          <p class="mt-2 text-base text-gray-600">
            还没有账号?
            <RouterLink
              to="/signup"
              class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              立即注册
            </RouterLink>
          </p>

          <form action="#" method="POST" class="mt-8">
            <div class="space-y-5">
              <!-- 账户 -->
              <div>
                <label for="" class="text-base font-medium text-gray-900">
                  账户名
                </label>
                <div
                  class="mt-2.5 relative text-gray-400 focus-within:text-gray-600"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <img class="w-5 h-5" src="@/assets/img/sign_icon_2.svg" />
                  </div>

                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="请输入账户"
                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>
              <!-- 密码 -->
              <div>
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-medium text-gray-900">
                    密码
                  </label>
                </div>
                <div
                  class="mt-2.5 relative text-gray-400 focus-within:text-gray-600"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <img class="w-5 h-5" src="@/assets/img/sign_icon_3.svg" />
                  </div>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="请输入密码"
                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>
              <!-- btn -->
              <div>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                >
                  登录
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
