<template>
  <ul v-if="posts && posts.length">
    <li v-for="post in posts" :key="post.id">
      <a @click="justDoIt(post.id)" class="postClick"> {{post.title}} </a>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
// import commentDisplay from './commentDisplay';
export default {
    name: "clickablePost",
    components: {
      // commentDisplay
    },
    data(){
      return {
        posts: [],
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
        });
    },
    methods: {
      justDoIt(id) {
        this.$root.$emit('eventing', id);
      }
    }
}
</script>

<style scoped>
  .postClick:hover {
    border: solid 1px;
    background: black;
    color: #ffffff;
    cursor: pointer;
  }
</style>
