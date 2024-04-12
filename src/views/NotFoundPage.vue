<template>
  <link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
  />

  <div class="flex items-center justify-center min-h-screen bg-white py-48">
    <div class="flex flex-col">
      <div class="flex flex-col items-center">
        <div class="text-indigo-500 font-bold text-7xl">404</div>
        <div
          class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10"
        >
          发生了一些问题
        </div>
        <div
          class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8"
        >
          您访问的页面不存在
        </div>
      </div>

      <div class="flex flex-col mt-48">
        <div class="text-gray-400 font-bold uppercase">您可以选择</div>

        <div class="flex flex-col items-stretch mt-5">
          <!-- Nav Item #1 -->
          <RouterLink
            to="/"
            class="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100"
          >
            <div class="grow flex flex-col pl-5 pt-2">
              <div
                class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
              >
                首页
              </div>
            </div>
            <!-- Chevron -->
            <img
              class="size-7 text-gray-400 my-auto pr-2 group-hover:text-gray-700 transition-all duration-200 delay-100"
              src="@/assets/img/404_icon_1.svg"
            />
          </RouterLink>
          <RouterLink
            to="/upload"
            class="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100"
          >
            <div class="grow flex flex-col pl-5 pt-2">
              <div
                class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
              >
                上传简历
              </div>
            </div>
            <img
              class="size-7 text-gray-400 my-auto pr-2 group-hover:text-gray-700 transition-all duration-200 delay-100"
              src="@/assets/img/404_icon_1.svg"
            />
          </RouterLink>

          <RouterLink
            to="/user"
            class="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100"
          >
            <div class="grow flex flex-col pl-5 pt-2">
              <div
                class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline"
              >
                我的
              </div>
            </div>
            <img
              class="size-7 text-gray-400 my-auto pr-2 group-hover:text-gray-700 transition-all duration-200 delay-100"
              src="@/assets/img/404_icon_1.svg"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
