<template>
  <div>
    <h1><strong>this is comment component {{postId}}</strong></h1>
    <ul v-if="comments && comments.length">
      <li v-for="comment in comments">
        <p>{{comment.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "commentDisplay",
        props:  {
            postId: String,
            default: "0"
        },

        data(){
            return{
                comments: [],
                errors: []
            }
        },

        watch:  {
            postId: function () {
                if(this.postId.length !== 0){
                    this.getComments()
                }
            }
        },

        methods: {
            getComments:  function (){
              let self = this;
              axios.get("https://jsonplaceholder.typicode.com/comments?postId="+this.postId)
                  .then(response => {
                      self.comments = response.data
              })
                  .catch(err=> {
                      this.errors.push(err);
                  })
            }
        }
    }
</script>

<style scoped>

</style>
