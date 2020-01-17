/* eslint-disable no-param-reassign */
import { getEnv } from '../config'

// export default async function request(endpoint, options = {}) {
//   const { url } = getEnv()
//   options.headers = {
//     'Content-Type': 'application/json',
//   }

//   const urlBase = url
//   const urlRoot = `${urlBase}${endpoint}`
//   return await window.fetch(urlRoot, options)
//     .then((response) => {
//       if (response.status >= 200 && response.status < 300) {
//         return response
//       }

//       const error = new Error(response.statusText)
//       error.response = response
//       throw error
//     }).then((response) => {
//       if (response.status === 204 || response.status === 205) {
//         return null
//       }

//       return response.json()
//     })
// }

export default async function request(endpoint, options = {}) {
  const { url } = getEnv()
  options.headers = {
    'Content-Type': 'application/json',
  }

  const urlBase = url
  const urlRoot = `${urlBase}${endpoint}`
  const response = await window.fetch(urlRoot, options)
  const status = await response
  const datum = await response.json()

  return { status, datum }
}
