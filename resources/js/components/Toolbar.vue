<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>RealTimeApp</v-toolbar-title>

      <v-spacer></v-spacer>
      <div>

      <router-link
       v-for="item in activeItems"
       :key="item.title"
       :to="item.to"            
       >
        <v-btn text>{{item.title}}</v-btn>
      </router-link>
      
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
import User from '../Helpers/User'
export default {

  data(){
    return {
      items: [
        {title : 'Forum', to : '/forum', show : true},
        {title : 'Ask Question', to : '/ask', show : User.loggedIn()},
        {title : 'Category', to : '/category', show : User.loggedIn()},
        {title : 'Login', to : '/login', show : !User.loggedIn()},
        {title : 'Logout', to : '/logout', show : User.loggedIn()},
      ]
    }
  },
  computed: {
    activeItems: function() {
      return this.items.filter(function(item) {
        return item.show == true
     })
   } 
  },
  created(){
    EventBus.$on('logout', () => {
      User.logout()
    })
  }
}

</script>

<style>

</style>