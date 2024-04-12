<template>
  <div class="py-10 bg-white sm:py-16 lg:py-24">
    <div
      class="flex flex-col sm:flex-row justify-around content-around items-center px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8 relative z-20"
    >
      <!-- 左侧区域 -->
      <div
        class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 border shadow-md"
      >
        <div class="text-center">
          <h2 class="mt-5 text-3xl font-bold text-gray-900">简历内容上传</h2>
        </div>
        <form class="mt-8 space-y-3" action="#" method="POST">
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-gray-500 tracking-wide"
              >输入文字</label
            >
            <div class="flex items-center justify-center w-full">
              <label
                class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 text-center"
              >
                <textarea
                  class="w-full h-full"
                  placeholder="键入此处"
                ></textarea>
              </label>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            <span>tips:&nbsp试试发送自我介绍内容</span>
          </p>
          <div>
            <button
              type="submit"
              class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              上传
            </button>
          </div>
        </form>
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
          <div class="flex items-center justify-center w-full">
            <label
              class="flex flex-col justify-start rounded-lg border-4 border-dashed w-full h-60 group text-center"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                action=""
                :on-change="handleChange"
                :on-remove="handleRemove"
                :on-progress="handleProgress"
                :file-list="fileList"
                :limit="fileLimit"
                :on-exceed="handleExceed"
                multiple
                :auto-upload="false"
                drag
              >
                <el-icon class="el-icon--upload">
                  <img class="w-8 h-8" src="@/assets/img/upload_icon_1.svg" />
                </el-icon>

                <div class="el-upload__text">
                  拖拽上传 或者 <em>点击上传</em>
                </div>
              </el-upload>
            </label>
          </div>
        </div>
        <p class="text-sm text-gray-300">
          <span>文件类型: pdf</span>
        </p>
        <div>
          <button
            type="submit"
            class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            上传
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
