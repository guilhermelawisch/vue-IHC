import { http } from './config'

export default {
  getCEP:(cep) => {
    console.log('test2')
    return http.get(`/${cep}/json`)
  }
}