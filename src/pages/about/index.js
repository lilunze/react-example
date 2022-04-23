/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 关于我们
 */
import { NavBar } from "@nutui/nutui-react";
import style from "./index.module.css";
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className={style.contact_container}>
      <NavBar
        title="联系我们"
        leftShow
        icon="more-x"
        onClickTitle={(e) => false}
        onClickBack={(e) => goBack()}
        onClickIcon={(e) => false}
      />
      <div className={style.contact_desc}>
        <span className={style.contact_head}>联系我们</span>
        <div className={style.contact_body}>
          <div className={style.contact_body_item  }>
            <span className={style.contact_body_title}>合作热线</span>
            <span className={style.contact_body_phone}>400-689-2896</span>
          </div>
          <div className={style.contact_body_item}>
            <span className={style.contact_body_title}>质量热线</span>
            <span className={style.contact_body_phone}>400-689-2896</span>
          </div>
        </div>
      </div>
      <div className={style.brands}>
        <span className={style.brand_head}>旗下品牌</span>
        <div className={style.brand_body}>
          <span className={style.brand_body_title}>稳健医疗：Winner</span>
          <img className={style.brand_img} src={require('../../assets/contact/w-logo.png')} alt="" />
        </div>
        <div className={style.brand_body}>
          <span className={style.brand_body_title}>全棉时代：Purcotton</span>
          <img className={style.brand_img} src={require('../../assets/contact/q-logo.png')} alt="" />
        </div>
        <div className={style.brand_body}>
          <span className={style.brand_body_title}>津梁生活：PureH2B</span>
          <img className={style.brand_img} src={require('../../assets/contact/j-logo.png')} alt="" />
        </div>
      </div>
    </div>
  );
}
