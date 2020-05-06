import axios from 'axios'
import config from './config.js'

const Guardian = axios.create({
  baseURL: 'https://content.guardianapis.com/',
  headers: { 'api-key': config.apiKey },
})

export const fetchArticles = (query) => {
  return Guardian.get('/search', {
    params: query,
  })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
}
