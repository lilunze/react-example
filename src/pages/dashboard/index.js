/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import { NavBar } from "@nutui/nutui-react";
import style from "./index.module.css";

export default function Dashboard() {
  return (
    <div className={style.user}>
      <NavBar
        title="我的"
        onClickTitle={(e) => false}
        onClickBack={(e) => false}
        onClickIcon={(e) => false}
      />

      <div className={style.avatar}></div>
      <div className={style.username}>Kristen</div>
      <div className={style.m_uMenu}>
        <div className={style.m_uMenu_item}>
          <img className={style.item_icon} src={require('../../assets/user/lock.png')} alt="" />
          <span className={style.item_desc}>修改密码</span>
          <img className={style.icon_r} src={require('../../assets/user/right.png')} alt="" />
        </div>
        <div className={style.m_uMenu_item}>
          <img className={style.item_icon} src={require('../../assets/user/add-user.png')} alt="" />
          <span className={style.item_desc}>添加客户</span>
          <img className={style.icon_r} src={require('../../assets/user/right.png')} alt="" />
        </div>
        <div className={style.m_uMenu_item}>
          <img className={style.item_icon} src={require('../../assets/user/exit.png')} alt="" />
          <span className={style.item_desc}>退出登录</span>
          <img className={style.icon_r} src={require('../../assets/user/right.png')} alt="" />
        </div>
      </div>
    </div>
  );
}
