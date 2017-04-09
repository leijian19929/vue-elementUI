/*
mutation里面干的才是最基层的工作，这里也是暴漏了各个操作state的方法
 */
export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}