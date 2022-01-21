export default [{
  path: '/pokedex',
  component: () => import('@/views/Index'),
  children: [
    {
      name: 'pokedex',
      path: '',
      component: () => import('@/views/Pokedex'),
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Pokédex' }
        ]
      },
    },
  ],
}]