<template>
  <h1>Profile Page</h1>

  <ul v-for="item in list" :key="item.id" class="item" >
   <li>{{item.id}}</li>
   <li>{{item.email}}</li>
   <li>{{item.first_name}}</li>
      <img :src="item.avatar"/>

  </ul>

</template>

<script>
 import {useRoute} from 'vue-router'
 import axios from 'axios'

 export default {
  name: 'ProfileComp',
  data(){
    return{
      list:[],
    };
  },

 async mounted(){
    // let result =  await  axios.get('https://reqres.in/api/users?page=1');
    //    this.list = result.data.data;

    //            console.warn(result.data.data);
    const route = useRoute();
    console.warn(route.params);

   await axios.post("https://jsonplaceholder.typicode.com/users", {
          name: 'TESTING',
          username: 'TEST',
          email: 'TEST@TEST.COM',
        })
        .then((response) => {
          console.warn(response.data);
        });
  },
}
</script>
<style>
 .item{
  display:flex;
 }
 .item img{
  width: 50px;
 }
 .item li{
    display: inline-block;
    width: 196px;
    padding: 3px;
    border: 1px solid black;
 }
</style> 