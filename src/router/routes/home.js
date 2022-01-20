export default [{
  path: '/home',
  component: () => import('@/views/Index'),
  children: [
    {
      name: 'Home',
      path: '',
      component: () => import('@/views/Home'),
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      },
    },
  ],
}]