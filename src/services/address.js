/*eslint-disable */
import { http } from './config'

export default {
  getCEP:(cep) => {
    return http.get(`/${cep}/json`)
  }
}
/*eslint-enable */