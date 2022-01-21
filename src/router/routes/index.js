import pokedex from './pokedex';

let routes = [];

routes = routes.concat(
  pokedex
);

routes.push({ 
  path: '/', 
  redirect: { 
    name: 'Pokedex' 
  } 
});

routes.push({
  path: '*',
  component: () => import('@/views/pages-error/Index'),
  children: [
    {
      name: '404 Error',
      path: '',
      component: () => import('@/views/pages-error/Error'),
    },
  ],
})

export default routes