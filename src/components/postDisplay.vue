<template>
	<div>this is post display {{msg}}
		<br>
		<ul v-if="posts && posts.length">
		<li v-for="post of posts" v-bind:key="post.id">
			<p><strong>{{post.title}}</strong></p>
			<p>{{post.body}}</p>
    </li>
		</ul>
		<ul v-if="errors && errors.length">
			<li v-for="error of errors" v-bind:key="error.id">
				{{error.message}}
			</li>
		</ul>
	</div>
</template>

<script>
// import vue from 'vue'
import axios from 'axios'
export default {
  name: "postDisplay",
  props:  {
    msg: String
  },
  data(){
		return{
			posts:[],
			errors:[]
    }
	},

mounted: function(){
	let self = this
	axios.get("https://jsonplaceholder.typicode.com/posts")
					.then(response => {
						self.posts = response.data
					})
					.catch(err => {
						/* eslint-disable no-console */
						this.errors.push(err)
						console.log(err)
						/* eslint-enable no-console */
					})
}}
</script>

<style scoped>

</style>
