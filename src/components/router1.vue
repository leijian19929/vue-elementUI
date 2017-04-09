<template>
<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
      <h3>router1组件</h3>
      <button @click="getData">
        click me!
      </button>
      {{test.name}}
      {{test.age}}
      {{compile?compile:''}}
    </div>
  </el-col>
</el-row>
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

<style lang="scss" scoped>
  .grid-content{
    background-color: #ccc;
    h3{
      color: #f0f;
    }
  }
</style>
