import base from "./base";
import axios, { AxiosRequestConfig } from "axios";
import { message } from "ant-design-vue";

// 设置超时时间
const instance = axios.create({
  timeout: 1000 * 10,
});
// 设置公共路径 和 Content-Type
instance.defaults.baseURL = base.baseurl;

interface AxiosConfig extends AxiosRequestConfig {
  loading: boolean;
}

const Fetch = ({
  url = "",
  method = "GET",
  data = {},
  params = {},
  headers = {
    "Content-Type": "application/json",
  },
}: AxiosConfig) => {
  if (localStorage.getItem("token")) {
    Object.assign(headers, {
      token: localStorage.getItem("token"),
    });
  }
  return new Promise((resolve, reject) => {
    instance({
      url,
      method,
      data,
      params,
      headers,
    })
      .then((res) => {
        console.log(data);
        if (res.data.code === 200) {
          console.log(res.data.data.userInfo);
          if (
            res.data.data.userInfo.name === data.username &&
            res.data.data.userInfo.password === data.password
          ) {
            message.success("登入成功");
            resolve(res.data);
          } else {
            message.error("登入失败，密码或用户名有误");
          }
        }
      })
      .catch((err) => {
        message.error("请求失败");
        reject(err);
      });
  });
};

export default Fetch;
