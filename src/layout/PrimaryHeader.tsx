import React from "react";

import { Menu, Dropdown, Layout, Avatar } from "antd";
import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from "@ant-design/icons";
const {Header} = Layout;

const PrimaryHeader: React.FC<{}> = props=>{
	const dispatch = useDispatch();
	const history = useHistory();
	const handleLogout = () => {
		dispatch({type:"logout"})
		history.push("/login")
	}
	const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>个人设置</Menu.Item>
        <Menu.Item>系统设置</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item onClick={handleLogout}>退出登录</Menu.Item>
    </Menu>
  );
	return (
    <Header>
      <div className="header-left">
        <MenuUnfoldOutlined style={{ fontSize: "1.2rem" }} />
      </div>
      <div className="header-right">
        <div className="hello">你好</div>
        <Dropdown overlay={menu} overlayStyle={{ width: "10rem" }}>
          <div className="ant-dropdown-link">
            <Avatar
              size={32}
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Dropdown>
      </div>
    </Header>
  );

}

export default PrimaryHeader;