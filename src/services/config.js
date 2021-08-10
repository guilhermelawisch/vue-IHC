/*eslint-disable */
import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})
/*eslint-enable */