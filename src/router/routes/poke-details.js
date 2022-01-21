export default [{
  path: '/pokedex',
  component: () => import('@/views/Index'),
  children: [
    {
      name: 'pokedex-detalhes',
      path: 'detalhes/:id',
      component: () => import('@/views/PokeDetails'),
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Pokédex' },
          { name: 'Detalhes' }
        ]
      },
    },
  ],
}]