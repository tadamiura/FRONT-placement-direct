<template>
  <div>
    <h1 class="display-1">Mes Contrats</h1>
    <Contract v-for="contract in contracts" :title="contract.title" :description="contract.description" :key="contract.id"/>
  </div>
</template>

<script>
import Contract from '@/components/Contract.vue'
export default {
  // middleware: 'auth',
  components: {
    Contract
  },
  data() {
    return {
      contracts: [],
    }
  },
  mounted() {
  },
  async asyncData({ $axios, $auth }) {
    let user = $auth.state.user
    const contracts = await $axios.$get(
      `http://localhost:8080/api/user/${user}/contract`
    )
    return { contracts };
  }
}
</script>
<style>
  li {
    list-style: none;
  }
</style>
