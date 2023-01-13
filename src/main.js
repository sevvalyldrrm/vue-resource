import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "https://https://vuejs-vue-resource-89738-default-rtdb.firebaseio.com/users.json";

/* interceptors bi arraydir. gönderdiğimiz request ve responselerin aralarına girip bu işlemlerde değişiklik yapmak için kullanırız.*/ 
/* request : yaptığımız isteği bize veren argümandır */
/* next : requestin devamını bize veren fonksiyondur */

Vue.http.interceptors.push((request, next) =>{
    if(request.method == "POST"){
        request.method = "PUT"
    }
    next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
