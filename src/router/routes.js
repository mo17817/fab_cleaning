
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'services', component: () => import('pages/services.vue') },
      { path: 'about', component: () => import ('pages/about.vue') },
      { path: 'success', component: () => import ('pages/success.vue') },
      { path: 'ceramic', component:() => import ('pages/ceramic.vue') },
      { path: 'powerwash', component:() => import ('pages/powerwash.vue')},
      { path: 'test', component: () => import ('pages/Test.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
