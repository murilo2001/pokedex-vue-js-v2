import home from './home';

let routes = [];

routes = routes.concat(
  home
);

routes.push({ 
  path: '/', 
  redirect: { 
    name: 'Home' 
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