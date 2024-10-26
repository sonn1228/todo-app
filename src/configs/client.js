import SERVER_API from "./config";

export default class HttpClient {
  constructor(serverApi = SERVER_API) {
    this.serverApi = serverApi;
  }

  async callApi(url, method = 'GET', params = {}, body = {}, token = null) {
    url = this.serverApi + url;
    if (Object.keys(params).length) {
      url = url + "?" + new URLSearchParams(params).toString();
    }
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      options.headers["X-Api-Key"] = token;
    }
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body);
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (res.ok) {
        return { res, data };
      } else {
        throw new Error(`API request failed with sstatus ${res.status}: ${data.message}`);
      }
    } catch (error) {
      console.error("API request error:", error);
      return { res: null, data: { message: "An error occurred" } };
    }
  }

  get(url, params = {}, token = null) {
    return this.callApi(url, "GET", params, {}, token);
  }
}