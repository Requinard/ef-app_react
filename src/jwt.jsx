import decode from 'jwt-decode'

export function getToken () {
  return localStorage.getItem('jwt')
}

function getDecodedToken () {
  return decode(getToken())
}

export function getUserId () {
  return getDecodedToken().primarysid
}

export function getGivenName () {
  return getDecodedToken().given_name
}

export function getRole () {
  return getDecodedToken().role
}

export function requestToken(){
  return `Bearer ${getToken()}`
}