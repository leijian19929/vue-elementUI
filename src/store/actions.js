/*
暴露出各种action
在创建vuex实例的时候，这些action就可以使用commit这样一个方法，state这个对象
action的主要作用是进行异步操作，在异步的回调中commit一个mutation名
 */
export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}