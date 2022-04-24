/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 权限包裹组件
 */
import { Navigate } from 'react-router-dom';
// 判断是否登陆
const isLogin = () => {
  return window.localStorage.getItem("token");
};

// 获取权限列表
const getAuthConfig = () => {
  return window.localStorage.getItem("permission");
};

// 校验权限
const checkAuth = (auth) => {
  const ret = getAuthConfig();
  if (ret && Array.isArray(ret) && ret.length) {
    let result = ret.find((key) => auth === key);
    if (result) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default function Auth({ auth, children }) {
  if (isLogin()) {
    const authorized = checkAuth(auth);
    return authorized ? children : null;
  }else{
      return <Navigate to='/login' />
  }
}
