import { mockRequest } from "../serve/index"
export default {
  getGoodList(params) {
    return mockRequest.post("/good/list", params)
  },
  submitOrder(params) {
    return mockRequest.post("/submit/order", params)
  },
}
