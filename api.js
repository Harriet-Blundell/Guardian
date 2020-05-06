import axios from 'axios'
import config from './config.js'

const Guardian = axios.create({
  baseURL: 'https://content.guardianapis.com/',
  headers: { 'api-key': config.apiKey },
})

export const fetchArticles = () => {
  return Guardian.get('/search')
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
}
