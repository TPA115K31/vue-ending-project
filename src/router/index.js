import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UploadPage from "@/views/UploadPage.vue";
import IndexPage from "@/views/IndexPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import SignInPage from "@/views/SignInPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import UserPage from "@/views/UserPage.vue";
import StatisticPage from "@/views/StatisticPage.vue";
import ResumePage from "@/views/ResumePage.vue";
import TestPage from "@/views/testPage.vue";
const routes = [
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		component: NotFoundPage,
	},
	{
		path: "/",
		component: IndexPage,
		children: [
			{
				path: "",
				component: HomePage,
			},
			{
				path: "upload",
				component: UploadPage,
			},
			{
				path: "user",
				component: UserPage,
			},
			{
				path: "statistic",
				component: StatisticPage,
			},
			{
				path: "resume",
				component: ResumePage,
			},
			{
				path: "test",
				component: TestPage,
			},
		],
	},
	{
		path: "/signin",
		component: SignInPage,
	},
	{
		path: "/signup",
		component: SignUpPage,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
