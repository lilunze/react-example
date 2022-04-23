/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 首页布局模块
 */
import style from "./index.module.css";
import { useNavigate } from 'react-router-dom';

export default function HomeItem(props) {
  const navigate = useNavigate()
  const redirect = () => {
    navigate(props.opt.path)
  }
  return (
    <div
      onClick={redirect}
      className={style.home_item}
      style={{backgroundImage: `url(${props.opt.background})`}}
    >
      <div className={style.title}>{props.opt.title}</div>
      <div className={style.description}>{props.opt.description}</div>
      <div className={style.btn_icon}>
        <img className={style.left_icon} src={props.opt.leftIcon} alt="" />
        <img className={style.right_icon} src={props.opt.rightIcon} alt="" />
      </div>
    </div>
  );
}
