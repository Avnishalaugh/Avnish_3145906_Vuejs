 <template>
 <div class="article-preview"> 
          <div class="article-meta">
            <a href="profile.html"><img :src="article.author.image" /></a>
            <div class="info">
              <a href="" class="author" @click="userProfile(article.author.username)">{{article.author.username}}</a>
              <span class="date">{{formatDate(article.createdAt)}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> <span @click="counter(article.favoritesCount)">{{article.favoritesCount}}</span>
            </button>
          </div>
          <router-link @click.native="InlineButtonClickHandler" :to="`/article/${article.slug}`" class="preview-link">
            <h1><span v-on:click="openArticle(article.slug)">{{article.title}}</span></h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </router-link>
        </div>
</template>

<script>
import moment from "moment";
export default {
    data: function(){
        return {
          art:""
        };
    },
    props : ["article"],
    methods : {
        formatDate(dateString){
            return moment(dateString).format("MMMM Do YYYY");
        },
        counter(art){
            this.article=art+1;
        },
         openArticle(avnish) {
            this.$store.dispatch("users/openArticle", {
            username : avnish
            })
            .then(() => {
                this.errors=[];
            })
            .catch( err => this.errors.push(err))
        
        },
        userProfile(userName){
            this.$store.dispatch("users/userProfile",{
                profileName :userName
            })
               .then(() => {
                this.errors=[];
            })
            .catch( err => this.errors.push(err))
        }
        

    }
};
</script>