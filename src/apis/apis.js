import Request from './request.js'
class apis {
  constructor() {
    // this._baseUrl = 'https://test2.zuoning327.com'
    // this._url = 'https://test.zuoning327.com'
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
   * 获取课程详情
   */
  getCourse(id) {
    return this._request.getRequest(this._baseUrl + `/courses/${id}`).then(res => res.data)
  }

  /**
   * 获取教师详情
   */
  getTeacher(id) {
    return this._request.getRequest(this._baseUrl + `/teachers/${id}`).then(res => res.data)
  }

  /**
   * 模糊搜索
   */
  search(keyword) {
    return this._request.getRequest(this._baseUrl + `/courses/search?keyword=${keyword}`).then(res => res.data)
  }

  /**
   * 是否购买了课程
   */
  verify(token, courseId) {
    return this._request
      .postRequest(this._url + `/member/verify`, { courseId }, { Authorization: token })
      .then(res => res.data)
  }

  /**
   * 申请
   */
  apply(course, token) {
    return this._request
      .postRequest(this._url + `/member/apply`, course, { Authorization: token })
      .then(res => res.data)
  }

  /**
   * 获取地址
   */
  getCourseUrl(key, token) {
    return this._request
      .getRequest(this._url + `/member/course?key=${key}`, {}, { Authorization: token })
      .then(res => res.data)
  }
}
export default apis
