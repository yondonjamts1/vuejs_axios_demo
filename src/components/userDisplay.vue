<template>
  <div>This is userDisplay div component
    <ul v-if="users && users.length">
      <li v-for="user of users">
        <p>ID: {{user.id}}</p>
        <p>FullName: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "userDisplay",
    props: {
      msg: String
    },
    data(){
      return{
          users:[]
      }
    },
    mounted() {
        let self = this
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                self.users = response.data
            })
            .catch(err => {
              /* eslint-disable no-console */
              console.log(err)
              /* eslint-enable no-console */
            })
    }
  }
</script>

<style scoped>

</style>
