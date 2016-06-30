import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import markdown from './doc/mark.js';
import router from './router';

router.start(App, '#app');
markdown.markdown();
