<template>
<div>
	<h3>router1组件</h3>
	<button @click="getData">
		click me!
	</button>
	{{test.name}}
	{{test.age}}
	{{compile?compile:''}}
</div>
</template>

<script>
export default {
  name: 'router1',
  data () {
    return {
    	test: {}
    }
  },
  computed: {
  	compile () {
  		return this.test.name + this.test.age
  	}
  },
  methods: {
  	getData () {
  		this.$http.get('/mock/test.json')
  		.then(res => {
  			this.test = res.body
  		})
  	}
  }
}
</script>

<style scoped>

</style>
