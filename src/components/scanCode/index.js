/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import style from "./index.module.css";

export default function ScanCode() {
  return (
    <div className={style.field}>
      <input placeholder="请扫描或输入UDI" />
      <img src={require('../../assets/Icon/bell.png')} alt="" className={style.right_icon} />
    </div>
  );
}
