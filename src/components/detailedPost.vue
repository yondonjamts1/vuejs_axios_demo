<template>
<div>
<!--  <input type="text" v-model="postId">-->
  <p> <strong>id:</strong> {{posts.id}}</p>
  <p> <strong>title:</strong> {{posts.title}}</p>
  <p> <strong>body:</strong> {{posts.body}}</p><br>
  <hr>
  <ol v-if="comments && comments.length">
    <li v-for="comment in comments" :key="comment.id">
      <p><strong>email: {{comment.email}} <br> name: {{comment.name}}</strong></p>
      <p>{{comment.body}}</p>
    </li>
  </ol>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "detailedPost",
    props: {
      // postId: Number,
      // default:  0,
    },
    data(){
      return{
        postId: Number,
        default: 0,
        posts:[],
        postErrors:[],
        comments:[],
        commentErrors:[]
      }
    },
    watch: {
      postId: function () {
        this.posts = [];
        this.comments = [];
        if(this.postId.length !== 0) this.getPostDetail();
      }
    },
    mounted() {
        this.$root.$on('eventing', postId => {
            this.postId = postId;
        });
    },

    methods:{
      getPostDetail: function () {
        let self = this;
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.postId)
          .then(responsePost =>{
            console.log(responsePost);
            self.posts = responsePost.data;
          })
          .catch(err=>{
            self.postErrors.push(err);
          })
        axios.get("https://jsonplaceholder.typicode.com/comments?postId="+this.postId)
          .then(responseComment =>{
            self.comments = responseComment.data;
          })
          .catch(err=>{
            self.commentErrors.push(err);
          })
      }
    }
  }
</script>

<style scoped>

</style>
