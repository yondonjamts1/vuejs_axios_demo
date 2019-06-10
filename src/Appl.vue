<template>
	<div id="appl">
		<center><h1>JSON data fetch...</h1></center>
		<postDisplay></postDisplay>
		<br>
		<commentDisplay></commentDisplay>
		<br>
		<userDisplay></userDisplay>
	</div>
</template>

<script>
import postDisplay from './components/postDisplay.vue'
import commentDisplay from './components/commentDisplay.vue'
import userDisplay from './components/userDisplay.vue'
export default {
	name: "Appl",
	components: {
		postDisplay,
		commentDisplay,
		userDisplay
	}
}
</script>

<style scoped>

</style>
