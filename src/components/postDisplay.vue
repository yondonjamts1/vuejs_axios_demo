<template>
	<div><h1><strong>this is post component</strong></h1>
		<span> {{select_post}} </span>
		<br>
		<input type="text" v-model="select_post"/>
		<br>
<!--		<ul v-if="posts && posts.length">-->
<!--		<li v-for="post of posts" v-bind:key="post.id">-->
<!--		<li>-->
<!--			<p><strong>{{post.title}}</strong></p>-->
<!--			<p>{{post.body}}</p>-->
<!--    </li>-->
<!--		</ul>-->
    <br>
        <p><strong>{{posts.title}}</strong></p>
        <p>{{posts.body}}</p>
		<ul v-if="errors && errors.length">
			<li v-for="error of errors" :key="error.id">
				{{error.message}}
			</li>
		</ul>
    <commentDisplay :post-id="select_post"></commentDisplay>
	</div>
</template>

<script>
import axios from 'axios';
import commentDisplay from './commentDisplay.vue';
export default {
    name: "postDisplay",
    components: {
        commentDisplay
    },
    props: {
        msg: String
    },
    data() {
        return {
            posts: [],
            errors: [],
            select_post: ""
        }
    },

    watch: {
        select_post: function () {
            if (this.select_post !== 0) {
                this.getPosts()
            }
        }
    },

    methods: {
        getPosts: function () {
            let self = this;
            posts:[];
            axios.get("https://jsonplaceholder.typicode.com/posts/" + self.select_post)
                .then(response => {
                    self.posts = response.data
                })
                .catch(err => {
                    /* eslint-disable no-console */
                    this.errors.push(err);
                    console.log(err)
                    /* eslint-enable no-console */
                })
        }
    }
}

</script>

<style scoped>

</style>
