/*
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 首页
 */
import { NavBar } from "@nutui/nutui-react";
import style from "./index.module.css";
import logo from "../../assets/home/logo.png";
import HomeItem from "../../components/homeItem";
import { useState } from "react";
import moment from "moment";

export default function Home() {
  const homeList = [
    {
      id: 0,
      title: "真伪鉴别",
      path: "/judge",
      description: "方便查询稳健产品",
      background: require("../../assets/home/bg-g.png"),
      leftIcon: require("../../assets/home/judge.png"),
      rightIcon: require("../../assets/home/doubleright-g.png"),
    },
    {
      id: 1,
      title: "流向查询",
      path: "/flowquery",
      description: "实时查询商品流向",
      background: require("../../assets/home/bg-p.png"),
      leftIcon: require("../../assets/home/location.png"),
      rightIcon: require("../../assets/home/doubleright-p.png"),
    },
    {
      id: 2,
      title: "商品入口",
      path: "/",
      description: "一键直达稳健官方商城",
      background: require("../../assets/home/bg-y.png"),
      leftIcon: require("../../assets/home/category.png"),
      rightIcon: require("../../assets/home/doubleright-y.png"),
    },
    {
      id: 3,
      title: "联系我们",
      path: "/about",
      description: "合作热线、质量热线",
      background: require("../../assets/home/bg-b.png"),
      leftIcon: require("../../assets/home/phone.png"),
      rightIcon: require("../../assets/home/doubleright-b.png"),
    },
  ];

  const HomeListView = homeList.map((item,index) => <HomeItem opt={item} key={index} />)

  const [date,setDate] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  setInterval(() => {
    // console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    setDate(moment().format('YYYY-MM-DD HH:mm:ss'))
  }, 1000)

  return (
    <div>
      <NavBar
        title="首页"
        onClickTitle={(e) => false}
        onClickBack={(e) => false}
        onClickIcon={(e) => false}
      />
      <div className={style.welcome}>
        <div className={style.welcome_detail}>
          <div className={style.descrip}>欢迎使用稳健医疗产品</div>
          <div className={style.time}>{date}</div>
        </div>
        <img className={style.welcome_img} src={logo} alt="" />
      </div>
      <div className={style.home_items}>{HomeListView}</div>
    </div>
  );
}
