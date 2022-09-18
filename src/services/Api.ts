import axios from 'axios'
import { config } from 'process'

import Config from 'Config'

const Api = axios.create({
  baseURL: Config.api.baseURL,
})

Api.interceptors.response.use((Config) => {
  return {
    ...config,
    params: {
      ...config.params,
    },
  }
})
export default Api
