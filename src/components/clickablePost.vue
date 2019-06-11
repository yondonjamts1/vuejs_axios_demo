<template>
  <ul v-if="posts && posts.length">
    <li v-for="post in posts" :key="posts.id"> <router-link to="" :postId=post.id @click=alert('hello')> {{post.title}} </router-link> </li>
  </ul>
</template>

<script>
import axios from 'axios';
import commentDisplay from './commentDisplay';
    export default {
        name: "clickablePost",
        components: {
          commentDisplay
        },
        data(){
          return {
            posts: [],
            errors: []
          }
        },
        mounted() {
          let self = this;
          axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response =>{
                  self.posts = response.data
                })
                .catch(err=>{
                  this.error.push(err);
            })
        }
    }
</script>

<style scoped>

</style>
