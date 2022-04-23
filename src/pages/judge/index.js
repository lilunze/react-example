/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import { NavBar } from "@nutui/nutui-react";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import ScanCode from '../../components/scanCode'

export default function Judge() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavBar
        title="真伪鉴别"
        leftShow
        icon="more-x"
        onClickTitle={(e) => false}
        onClickBack={(e) => goBack()}
        onClickIcon={(e) => false}
      />
      <img
        className={style.logo_img}
        src={require("../../assets/contact/w-logo.png")}
        alt=""
      />
      <ScanCode />
    </div>
  );
}
