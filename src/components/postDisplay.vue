<template>
	<div><h1><strong>this is post component</strong></h1>
		<span> {{select_post}} </span>
		<br>
		<input type="text" v-model="select_post"/>
		<br>
		<ul v-if="posts && posts.length">
<!--		<li v-for="post of posts" v-bind:key="post.id">-->
		<li>
			<p><strong>{{post.title}}</strong></p>
			<p>{{post.body}}</p>
    </li>
		</ul>
<!--    <p><strong>{{post.title}}</strong></p><br>-->
<!--    <p>{{post.body}}</p>-->
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
    props: {
        msg: String
    },
    data() {
        return {
            posts: [],
            errors: []
        }
    },

    watch: {
        select_post: function () {
            if (this.select_post.length !== 0) {
                this.getPosts()
            }
        }
    },

    methods: {
        getPosts: function () {
            let self = this
            axios.get("https://jsonplaceholder.typicode.com/posts/" + self.select_post)
                .then(response => {
                    self.posts = response.data
                })
                .catch(err => {
                    /* eslint-disable no-console */
                    this.errors.push(err)
                    console.log(err)
                    /* eslint-enable no-console */
                })
        }
    }
}
</script>

<style scoped>

</style>
