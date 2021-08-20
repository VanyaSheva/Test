import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './../views/MainPage';
import PostPage from './../views/PostPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  { 
    path: '/:id', 
    component: PostPage 
  }
];

export const router = new VueRouter({
  routes
});