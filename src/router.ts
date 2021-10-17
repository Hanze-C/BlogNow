import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior(to, from) {
    if (to === from) return
    return { top: 0 }
  },
})

router.afterEach(({ name }) => {
  document.body.setAttribute('data-route', name as string)
  // Fix route when modal opened
  document.body.style.overflow = 'visible'
})

// Home
router.addRoute({
  path: '/',
  name: 'home',
  component: () => import('./view/index.vue'),
})

// Archive
router.addRoute({
  path: '/archives',
  name: 'archives',
  alias: ['/archive'],
  component: () => import('./view/archives.vue'),
})

// Post
router.addRoute({
  path: '/post/:uuid',
  name: 'post',
  component: () => import('./view/post.vue'),
})
router.addRoute({
  path: '/p-:pid',
  name: 'post-pid',
  component: () => import('./view/post.vue'),
})
router.addRoute({
  path: '/-/:slug',
  name: 'post-slug',
  component: () => import('./view/post.vue'),
})

// Post edit
router.addRoute({
  path: '/post/:uuid/edit',
  name: 'edit-post',
  component: () => import('./view/edit-post.vue'),
})
router.addRoute({
  path: '/post/new',
  name: 'edit-post-create',
  component: () => import('./view/edit-post.vue'),
})

// Auth
router.addRoute({
  path: '/auth',
  alias: ['/login', '/sign-in', '/logout'],
  name: 'auth',
  component: () => import('./view/auth.vue'),
})

// User
router.addRoute({
  path: '/user/:uuid',
  name: 'user-uuid',
  component: () => import('./view/user.vue'),
})
router.addRoute({
  path: '/u/:uid',
  name: 'user-uid',
  component: () => import('./view/user.vue'),
})
router.addRoute({
  path: '/@:username',
  name: 'user-username',
  component: () => import('./view/user.vue'),
})

// Search
// router.addRoute({
//   path: '/search',
//   name: 'search-index-redirect',
//   component: () => import('./view/search.vue'),
// })

// 404
router.addRoute({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('./view/404.vue'),
})

export { router }
