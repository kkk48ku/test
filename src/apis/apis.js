import Request from './request.js'
class apis {
  constructor() {
    this._baseUrl = 'http://localhost:3000'
    this._url = 'http://localhost:4000'
    this._defaultHeader = { 'data-tupe': 'application/json' }
    this._request = new Request()
    this._request.setErrorHandler(this.errorHandler)
  }

  /**
   * 统一的异常处理方法
   */
  errorHandler(res) {
    console.error(res)
  }

  /**
   * 登录
   */

  login(data) {
    return this._request.postRequest(this._url + `/member/login`, data).then(res => res.data)
  }

  /**
   * 绑定手机号
   */
  bindPhone(data) {
    return this._request.postRequest(this._url + `/member/bind`, data).then(res => res.data)
  }

  /**
   * 获取验证码
   */
  getAuthCode(data) {
    return this._request.getRequest(this._url + `/member/code`, data).then(res => res.data)
  }

  /**
   * 获取所有轮播图
   */

  getBanners() {
    return this._request.getRequest(this._baseUrl + '/banners').then(res => res.data)
  }

  /**
   * 获取推荐课程列表
   */
  getCourseList() {
    return this._request.getRequest(this._baseUrl + '/courses?isRecommend=true').then(res => res.data)
  }

  /**
   * 模糊搜索
   */
  search(keyword) {
    return this._request.getRequest(this._baseUrl + `/courses/search?keyword=${keyword}`).then(res => res.data)
  }
}
export default apis
