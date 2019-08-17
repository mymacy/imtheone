export default [
	{
		path: '/',
		component: () =>
			import ('layouts/0_layout'),
		children: [{
			path: '',
			component: () =>
				import ('pages/page_1/0_index')
		}]
	},

	{
		path: '/about/',
		component: () =>
			import ('layouts/0_layout'),
		children: [{
			path: '',
			component: () =>
				import ('pages/page_2/0_index')
		}]
	},

	{
		path: '/team/',
		component: () =>
			import ('layouts/0_layout'),
		children: [{
			path: '',
			component: () =>
				import ('pages/page_3/0_index')
		}]
	},


	{ // Always leave this as last one
		path: '*',
		component: () =>
			import ('pages/X_error/404')
	}
]
