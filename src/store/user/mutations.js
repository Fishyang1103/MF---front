// 跟使用者相關的 vuex 操作
// state = user module 的 state
// this.state = vuex root state
// this.state.module名 = 其他 module 的 state
export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.role = data.role
  state.cart = data.cart.length
  state.avatar = data.avatar
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
  state.role = 0
  state.cart = 0
  state.avatar = ''
}

export const getInfo = (state, data) => {
  state.account = data.account
  state.role = data.role
  state.cart = data.cart.length
  state.avatar = data.avatar
}

export const extend = (state, data) => {
  state.token = data
}

// 更新購物車數量
export const updateCart = (state, data) => {
  state.cart = data
  console.log(state.cart)
}
