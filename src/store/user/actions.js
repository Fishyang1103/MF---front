// 跟 vuex 有關的東西丟進來
// action 可以執行非同步的東西
// @/ 代表 src 資料夾
import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const login = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    // commit 呼叫 mutations 後面加名稱就好
    commit('login', data.result)
    // 登入後回到首頁
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

// App.vue 的 methods
export const logout = async ({ commit, state }) => {
  try {
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    // 導回首頁
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}

// 取得line的資料
export const signInLine = async ({ commit, state }) => {
  const matches = location.href.match(/jwt=([^.\s]+.[^.\s]+.[^.\s]+)/gm)
  if (matches?.length > 0) {
    const jwt = matches[0].substring(4, 176)
    if (jwt) {
      await api.get('/users/signInLineData', {
        headers: {
          authorization: 'Bearer ' + jwt
        }
      }).then(res => {
        commit('login', res.data)
        // router.push('/')
        window.history.pushState('', '', '/line')
      }).catch((error) => {
        console.log(error)
        commit('logout')
      })
    }
  }
}

// 加入購物車，要先登入才能加
export const addCart = async ({ commit, state }, data) => {
  if (state.token.length === 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請先按右上角登入'
    })
    router.push('/')
    return
  }
  if (data.quantity <= 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請輸入正確數量'
    })
    return
  }
  try {
    const { data: resData } = await api.post('/users/me/cart', data, {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    console.log(resData.result)
    commit('updateCart', resData.result)
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '加入購物車成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '加入購物車失敗'
    })
  }
}

// export const getUserInfo = async (req, res) => {
//   try {
//     res.status(200).send({
//       success: true,
//       message: '',
//       result: {
//         account: req.user.account,
//         name: req.user.name,
//         role: req.user.role,
//         avatar: req.user.avatar,
//         cart: req.user.cart
//       }
//     })
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: '伺服器錯誤'
//     })
//   }
//   console.log('getUserInfo 抓取使用者資料')
// }

// 取使用者資料
// export const getInfo = async ({ commit, state }) => {
//   if (state.token.length === 0) return
//   try {
//     const { data } = await api.get('/users/me', {
//       headers: {
//         authorization: 'Bearer ' + state.token
//       }
//     })
//     commit('getInfo', data.result)
//   } catch (error) {
//     commit('logout')
//   }
// }
