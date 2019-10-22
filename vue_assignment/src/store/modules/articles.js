import { api } from "../api";

export default {
    namespaced: true,
    state: {
        feed : [],
        count: 0
    },
    mutations: {
        setArticles(state,{articles, articlesCount}) {
            state.feed = articles;
            state.count= articlesCount;
        }
    },
    actions: {
         async getGlobalFeed({commit}, payload = {page: 1}){
            let route = "/articles";
            if(payload){
                const {
                    tag=null,
                    author =null,
                    favourited=null,
                    page=1
                } = payload;
                route += tag ? `?tag=${tag}&` : "";
                route += author ? `?author=${author}&` : "";
                route += favourited ? `?favourited=${favourited}&` : "";
                route += page ? `?offset=${(page-1) * 10}&limit=10` : "";
            }
            const response = await api.get(route);
            commit("setArticles", response.data);
        },
        async getUserFeed({commit}, payload = {page: 1}){
            let route = "/articles/feed";
            if(payload){
                const {page = 1} = payload;
                route += page ? `?offset=${(page-1) * 10}&limit=10` : "";
            }
            const response = await api.get(route);
            commit("setArticles", response.data);
        }

        // getArticle: async function({commit}) {
        //     const article = await api.get("/api/articles/:slug");
        //     commit("setArticle",article);
        // },
        // publishArticle: async function({commit}, {title,description,body}){
        //     try{
        //         const response = await api.post("/api/articles", {
        //             article: {
        //                 title,
        //                 description,
        //                 body
        //             }
        //         });
            
        //     if(response.data.article)
        //     {
        //         commit("getArticle",response.data.article);
        //     }
        //     }catch(e){
        //         console.error(e);
        //         throw e;
        //     }
        // },
    }
}