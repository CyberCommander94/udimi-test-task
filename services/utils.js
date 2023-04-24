export function getAuthToken(context) {
  let token = context.$cookies.get('auth._token.local')
  if (!token) {
    token = localStorage.getItem('auth._token.local')
  }
  return token
}
