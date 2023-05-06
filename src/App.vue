<template>
<div class="routes">
<router-link to="/">Home</router-link><br/>
<router-link to="/Profile/Test/2">Profile</router-link><br/>
<router-link to="/Profile/Test">404 page</router-link><br/>
<router-view/>
</div>
</template>

<script>
import {mapActions} from "vuex";
// import {mapGetters} from "vuex";
import {mapState} from "vuex";

export default {
  name: 'App',
  // mounted(){
  //   console.warn("this",this.$store.getters.saleProducts);
  // },
  computed:{
  // count(){
  //   return this.$store.getters.saleProducts;
  // },
  ...mapState([
      'count',
    ]),
  // ...mapGetters([
  //   'saleProducts'
  // ])
},
methods:{
  //  clock(){
  //    this.$store.commit('reducePrice');
  //  },
   ...mapActions([
    'increment',
    'decrement'
   ])
}
  
}
</script>

<style>
</style>