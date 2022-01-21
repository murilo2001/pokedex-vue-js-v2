export default [{
  path: '/pokedex',
  component: () => import('@/views/Index'),
  children: [
    {
      name: 'Pokedex',
      path: '',
      component: () => import('@/views/Pokedex'),
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Pokedex' }
        ]
      },
    },
  ],
}]