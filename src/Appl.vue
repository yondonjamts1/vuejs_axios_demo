<template>
	<div id="appl">
		<center><h1>JSON data fetch...</h1></center>
<!--		<postDisplay></postDisplay>-->
<!--		<br>-->
<!--		<commentDisplay></commentDisplay>-->
<!--		<br>-->
<!--		<userDisplay></userDisplay>-->
    <div class="cont">
      <div class="left_div">
        <clickablePost @postIdChanged="postIdChanged"></clickablePost>
      </div>
      <div class="right_div">
<!--        <postDisplay></postDisplay>-->
        <detailedPost :post-id="selectedPostId"></detailedPost>
      </div>
    </div>
    <hr>
    <userDisplay></userDisplay>
	</div>
</template>

<script>
//import postDisplay from './components/postDisplay.vue'
//import commentDisplay from './components/commentDisplay.vue'
import userDisplay from './components/userDisplay.vue'
import clickablePost from './components/clickablePost'
import detailedPost from './components/detailedPost.vue'
export default {
	name: "Appl",
	components: {
		// postDisplay,
		userDisplay,
    clickablePost,
    detailedPost
	},
  data() {
    return {
      selectedPostId: 0,
    };
  },
  methods: {
    postIdChanged(postId) {
      this.selectedPostId = postId;
    }
  }
}
</script>

<style scoped>
  .cont{
    display: flex;
  }
  .left_div{
    border: solid dodgerblue;
    width: fixed 70%;
    height: 100%;
    float: left;
    margin-right: 1px;
}
  .right_div{
    border: solid dodgerblue;
    flex-grow: 1;
}
</style>
