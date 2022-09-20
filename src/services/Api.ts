import axios from 'axios'
import { config } from 'process'

import Config from 'Config'

const Api = axios.create({
  baseURL: Config.api.baseURL,
})

Api.interceptors.response.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      toke: Config.api.token,
    },
  }
})
export default Api
