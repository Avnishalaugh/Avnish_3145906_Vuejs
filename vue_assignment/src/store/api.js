import axios from "axios";

export const api =axios.create({
    baseURL : "https://conduit.productionready.io/api"
});

export function setToken(jwt){
    api.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearToken(){
    delete api.defaults.headers.common["Authorization"];
}

 
 /*
  * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
  */
//  axios.interceptors.request.use(
//    (config) => {
//      let token = localStorage.getItem('jwt_token')
 
//      if (token) {
//        config.headers['Authorization'] = `Token ${ token }`
//      }
 
//      return config
//    },
 
//    (error) => {
//      return Promise.reject(error)
//    }
//  )