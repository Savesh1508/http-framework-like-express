module.exports = class Router {
  constructor() {
    this.endpoints = {}
  }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }
    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`Address ${path} already has method ${method}`)
    }
    endpoint[method] = handler

  }

  post(path, handler) {
    this.request('POST', path, handler);
  }

  get(path, handler) {
    this.request('GET', path, handler);
  }

  put(path, handler) {
    this.request('PUT', path, handler);
  }

  delete(path, handler) {
    this.request('DELETE', path, handler);
  }
}
