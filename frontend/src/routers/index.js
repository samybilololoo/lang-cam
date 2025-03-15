import { createRouter, createWebHistory } from 'vue-router';
import Hompage from '../views/Homepage.vue';
import UserenrolForm from '../views/UserenrolForm.vue';
import Traductor from '../views/Traductor.vue';
import TraductorText from '../views/TraductorText.vue'
import CollectedLang from '../views/CollectedLang.vue'

const routes = [
  { path: '/', component: Hompage },
  { path: '/userenrolform', component: UserenrolForm },
  { path: '/traductor', component: Traductor },
  { path: '/traductorText', component: TraductorText },
  { path: '/collectedLang', component: CollectedLang },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
