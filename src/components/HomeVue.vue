<template>
  <h1>Home Page</h1>
  <div class="counter">
    <h2>Count is : {{ count }}</h2>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
  </div>
  <form class="ui large form">
    <input type="text" placeholder="email" :value="email" @input="updateEmail" />
    <h2>{{ email }}</h2>
    <input type="password" name="password" placeholder="password" :value="password" @input="updatePassword" />
    <h2>{{ password }}</h2>
<button @click="signInButtonPressed" >SIGN IN</button>
</form>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'HelloVue',
  computed: {
    ...mapState([
      'count',
      'email',
      'password'
    ]),
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ]),
    updateEmail(e) {
      this.$store.commit('updateEmail', e.target.value)
    },
    updatePassword(e) {
      this.$store.commit('updatePassword', e.target.value)
    },
    signInButtonPressed(e){
      console.warn('clicked',this.email,this.password);
      e.preventDefault();
    }
  },

}
</script>
<style>
.counter {
  font-family: monospace;
}

.counter h2 {
  width: 200px;
  text-align: center;
  border: 2px solid;
  padding: 10px;
}

.counter button {
  background-color: yellow;
  padding: 10px;
  margin: 10px;
  border: 0px;
}
</style>