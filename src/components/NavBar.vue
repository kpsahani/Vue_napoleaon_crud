<template>
  <div class="hello">
   <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav float-right">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
              <button class="btn btn-info">Home</button>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link :to="{ name: 'AddList' }" class="nav-link">
              <button class="btn btn-primary">AddUsers</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ItemList' }" class="nav-link">
              <button class="btn btn-succsess " >UsersList</button>
          </router-link>
        </li> -->
        <li class="nav-tem">
            <router-link :to="{ name: '' }" class="nav-link"> 
             <button class="btn btn-info" @click="logout">Logout</button>
            </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NavBar',
  methods : {
    logout : function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }

  }
 
}
</script>
<style scoped>
ul.li {
  float: right;
}
</style>
