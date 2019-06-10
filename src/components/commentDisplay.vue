<template>
  <div>
    <h1><strong>this is comment component {{postId}}</strong></h1>
    <ul v-if="unfconmment && unfconmment.length">
      <li v-for="comment in unfconmment">
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
                unfconmment: [],
                comments: [],
                errors: []
            }
        },

        created() {
            let self = this;
            axios.get("https://jsonplaceholder.typicode.com/comments/" + self.postId)
                .then(response => {
                    self.unfconmment = response.data
            })
                .catch(err=> {
                    this.erros.push(err);
                    console.log(err)
                })
        }
    }
</script>

<style scoped>

</style>
