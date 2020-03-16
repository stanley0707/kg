import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import store from './store.js'
import router from './router.js'
import {library} from '@fortawesome/fontawesome-svg-core'

import {fas} from '@fortawesome/free-solid-svg-icons'

import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText}
  from '@fortawesome/vue-fontawesome'
import Post from './components/post/Post.js'

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


Vue.component('blog-card', {
    data: () => ({
        name: '10 Best Things to Do in Seattle',
        category: 'путешествия',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg',
        author: 'Стас Шилов',
        desc: `Seattle is a seaport city on the west coast of the United States...`,
        date: '2020 20 12 в 15:00',
        status_style: 'color=rgb(255, 47, 0)',
        //status_style_shadow: '"box-shadow: 0px 0px 15px 1px rgb(255, 47, 0);"'
      }),
    template: Post
});

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
    components: { App },
    store: store,
    router: router,
    render: h => h(App)
}).$mount('#app')