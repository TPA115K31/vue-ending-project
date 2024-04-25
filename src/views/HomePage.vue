<template>
	<!-- 引人入胜 -->
	<section class="py-10 bg-white sm:py-8 lg:py-16">
		<div class="px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8 relative z-20">
			<div class="max-w-xl mx-auto text-center">
				<div>
					<h1 class="text-5xl font-bold md:text-6xl">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-300"
						>
							让阅读简历简单化
						</span>
					</h1>
					<p class="mt-5 text-base text-black sm:text-xl">
						基于多模态大模型自动抽取并结构化简历关键信息，无需再一字一行地浏览简历。
					</p>
					<RouterLink
						to="signin"
						class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
						role="button"
					>
						立即体验
						<img
							class="w-6 h-6 ml-8 -mr-2"
							src="@/assets/img/landing_icon_4.svg"
						/>
					</RouterLink>
				</div>
				<div
					class="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0"
				>
					<div class="flex items-center">
						<img
							class="flex-shrink-0"
							src="@/assets/img/landing_icon_1.svg"
						/>
						<p class="ml-3 text-sm text-black">协助招聘人员快速筛选简历</p>
					</div>

					<div class="flex items-center">
						<img
							class="flex-shrink-0"
							src="@/assets/img/landing_icon_2.svg"
						/>
						<p class="ml-3 text-sm text-black">
							无需进行任何设置，一键提取关键信息
						</p>
					</div>

					<div class="flex items-center">
						<img
							class="flex-shrink-0"
							src="@/assets/img/landing_icon_3.svg"
						/>
						<p class="ml-3 text-sm text-black">信息可视化，简单明了</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- 系统介绍 -->
	<section class="py-10 bg-white sm:py-8 lg:py-16">
		<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div
				class="my-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12"
			>
				<div class="relative lg:mb-12">
					<div class="pl-12 pr-6">
						<img
							class="relative"
							src="@/assets/img/landing_introduce_1.png"
							alt=""
						/>
					</div>
				</div>

				<div class="2xl:pl-16">
					<h2
						class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl lg:leading-tight"
					>
						支持多种格式的简历输入
					</h2>
					<p class="text-xl leading-relaxed text-gray-900 mt-9">
						针对简历的格式不同的问题，系统内设计了多格式处理的功能，目前我们可以接受PDF和文本两种格式的简历输入
					</p>
				</div>
			</div>

			<hr class="mt-16 mb-10 border-gray-200 lg:hidden" />

			<div
				class="my-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12"
			>
				<div class="2xl:pl-16">
					<h2
						class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl lg:leading-tight"
					>
						使用高精度AI简历识别模型
					</h2>
					<p class="text-xl leading-relaxed text-gray-900 mt-9">
						我们基于多模态大模型技术，使用GPT-4从简历文本、图像方面，目前的模型能够准确、快速地解析和分析各种格式的简历，将重要的信息提取出来，为人力资源部门和招聘经理提供宝贵的支持和帮助。
					</p>
				</div>
				<div class="relative lg:mb-4">
					<div class="pl-12 pr-6">
						<img
							class="relative"
							src="@/assets/img/landing_introduce_2.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- 系统流程 -->
	<section class="py-10 bg-white sm:py-8 lg:py-16">
		<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="max-w-2xl mx-auto text-center">
				<h2
					class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl"
				>
					本系统运行流程
				</h2>
				<p
					class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600"
				>
					本系统基于多模态大模型，将上传的简历自动提取并结构化，提取结果以图表形式展示。
				</p>
			</div>

			<div class="relative mt-12 lg:mt-20">
				<div
					class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"
				>
					<img
						class="w-full"
						src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
						alt=""
					/>
				</div>

				<div
					class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"
				>
					<div>
						<div
							class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
						>
							<span class="text-xl font-semibold text-gray-700"> 1 </span>
						</div>
						<h3
							class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10"
						>
							上传简历
						</h3>
						<p class="mt-4 text-base text-gray-600">
							用户在系统上传界面执行简历文件上传流程
						</p>
					</div>

					<div>
						<div
							class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
						>
							<span class="text-xl font-semibold text-gray-700"> 2 </span>
						</div>
						<h3
							class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10"
						>
							信息抽取并解析
						</h3>
						<p class="mt-4 text-base text-gray-600">
							系统服务器接受上传的简历文件，在预处理后调用多模态大模型进行信息抽取并结构化，存储结果
						</p>
					</div>

					<div>
						<div
							class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
						>
							<span class="text-xl font-semibold text-gray-700"> 3 </span>
						</div>
						<h3
							class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10"
						>
							简历结构化展示 & 统计可视化
						</h3>
						<p class="mt-4 text-base text-gray-600">
							用户查看单份简历结构化结果，可以查看全部简历统计分析的可视化图表
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
