import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/views/HomeView.vue'),
	},
	{
		path: '/search',
		component: () => import('@/views/SearchView.vue'),
	},
	{
		path: '/edited',
		component: () => import('@/views/EditedView.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'no-match',
		component: () => import('@/views/NotFound.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router