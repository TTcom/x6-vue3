import axios from "axios"

/**
 * 封装axios请求类
 */
export default class CustomAxiosInstance {
  constructor(
    axiosConfig,
    backendConfig = {
      codeKey: "code",
      dataKey: "data",
      msgKey: "message",
      successCode: 200,
    }
  ) {
    this.backendConfig = backendConfig
    this.instance = axios.create(axiosConfig)
    this.setInterceptor()
  }

  /** 设置请求拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(
      async config => {
        const handleConfig = { ...config }
        return handleConfig
      },
      axiosError => {
        console.log(axiosError)
      }
    )
    this.instance.interceptors.response.use(
      async response => {
        const { status, data } = response
        if (status === 200 || status < 300 || status === 304) {
          return data
        }
      },
      axiosError => {
        console.log(axiosError)
      }
    )
  }
}
