import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "./assets/main.css";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

router.beforeEach(async (to, from) => {
	console.log(localStorage.getItem("ms_userid"))
	console.log(to.path)
	if (
		!localStorage.getItem("ms_userid") &&
		(to.path == "/Upload") | (to.path == "/User") | (to.path == "/Statistic")
	) {
		ElMessage({
			message: "请先登录",
			type: "warning",
		});
		return "/Signin";
	}
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(ElementPlus);
app.mount("#app");
