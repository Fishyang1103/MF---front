// 跟使用者相關的 vuex 操作
// state = user module 的 state
// this.state = vuex root state
// this.state.module名 = 其他 module 的 state
export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.role = data.role
  state.cart = data.cart
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
  state.role = 0
  state.cart = 0
}
