import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://fragility.api.ajdube.com`
    // baseURL: `http://localhost:3000/`
  })
}