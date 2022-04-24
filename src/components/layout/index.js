/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabbar, TabbarItem } from "@nutui/nutui-react";


export default function Layout(){
	// const [title, setTitle] = useState('首页')
	const navigate = useNavigate()
	// tabBar 切换
	const tabChange = (child, idx) => {
		// setTitle(child.props.tabTitle)
		switch(idx) {
			case 0:
				navigate('/home');
				break;
			case 1:
				navigate('/dashboard');
				break;
			default:
				navigate('/home')
		}
  }

  return (
		<div>
			<Tabbar bottom unactiveColor="#999" activeColor="#0FBDA6" tabSwitch={tabChange}>
				<TabbarItem tabTitle="首页" icon="category"/>
				<TabbarItem tabTitle="我的" icon="my"/>
			</Tabbar>
			<Outlet />
		</div>
	);
}
