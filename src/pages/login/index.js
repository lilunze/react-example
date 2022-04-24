/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 登陆界面
 */
import { Input, Button } from "@nutui/nutui-react";
import { useState } from "react";
import style from "./index.module.css";

export default function Login() {
  const [user, UpdateUser] = useState("");
  const [password, UpdatePassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div>
        <img
          className={style.logo_img}
          src={require("../../assets/contact/w-logo.png")}
          alt=""
        />
      </div>
      <div>
        <Input label="用户名" defaultValue={user} requireShow />
        <Input
          label="密码"
          defaultValue={password}
          requireShow
          type="password"
        />
        <Button
          loading={loading}
          type="success"
        //   onClick={() => {
        //     setTimeout(() => {
        //       setLoading(false);
        //     }, 1500),
        //       setLoading(!loading);
        //   }}
        //   style={{ margin: 8 }}
        >
          Click me!
        </Button>
      </div>
    </div>
  );
}
