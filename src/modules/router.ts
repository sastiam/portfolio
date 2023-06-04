import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes);

export const routerInstance = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export const install = (app: any) => {
			// asdasd
	app.use(routerInstance);
}
