import { createRouter, createWebHistory } from 'vue-router';

// 路由懒加载：只加载当前访问的页面文件，访问其他页面时再加载对应 js → 速度更快、首页更快打开
const Home = () => import('@/views/home/Home.vue')
const Blog = () => import('@/views/blog/Blog.vue')
const Portfolio = () => import('@/views/portfolio/Portfolio.vue')
const Projects = () => import('@/views/projects/Projects.vue')
const Tools = () => import('@/views/tools/Tools.vue')
const About = () => import('@/views/about/About.vue')
const Contact = () => import('@/views/contact/Contact.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/tools', name: 'tools', component: Tools },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact }
  ]
})

export default router;
