import React, { useMemo, useState } from "react";
import CSIcon from "../components/CSIcon";
import { Layout, Menu } from "antd";
import {routes} from "../routes";
import { Link, withRouter, useHistory } from "react-router-dom";

console.log("routes",routes)
const {Sider} = Layout;
const {SubMenu}	= Menu;
const PrimarySidebar:React.FC<{}> = props=>{
  const history = useHistory();

	const [current, setCurrent] = useState<string>(history.location.pathname);
	console.log("current",current)
	const collapsed = false;
	const subMenus = useMemo(() => {
    return routes.map((menuItem: any) => {
      if (!menuItem.subMenu) {
        return (
          <Menu.Item key={menuItem.key} className="side-item-wrap">
            <Link to={menuItem.path}>
							<CSIcon type={menuItem?.meta?.icon}></CSIcon>
							<span>{menuItem?.meta?.name}</span>
						</Link>
          </Menu.Item>
        );
      }

      const subMenuTitle = (
        <span>
          <CSIcon type={menuItem?.meta?.icon}></CSIcon>
          <span>{menuItem?.meta?.name}</span>
        </span>
      );
      const menuItems = menuItem?.subMenu.map((item: any) => {
        return (
          <Menu.Item key={item.key} className="side-item">
						<Link to={item.path}>
							<span>{item.meta.name}</span>
						</Link>
          </Menu.Item>
        );
      });

      return (
        <SubMenu key={menuItem?.key} title={subMenuTitle}>
          {menuItems}
        </SubMenu>
      );
    });
  },[]);
	return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
    >
      <div className="logo"></div>
      <Menu theme="dark" mode="inline">
        {subMenus}
      </Menu>
    </Sider>
  );
}

export default withRouter(PrimarySidebar);