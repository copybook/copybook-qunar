let defaultCity = '广州'
// 加入try，是因为部分浏览器开启隐身功能，导致localStorage失效
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
