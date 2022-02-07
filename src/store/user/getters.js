// 判斷有沒有登入 是不是管理者身份
// 讓使用者登入之後不會再出現登入的按鈕
export const user = (state) => {
  return {
    isLogin: state.token.length > 0,
    isAdmin: state.role === 1,
    ...state
  }
}
