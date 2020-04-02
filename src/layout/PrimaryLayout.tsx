import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { getToken } from "../utils/auth";
// import  {UserState}  from "../store/module/user";
import { getMeta, getUserInfo } from "../api/login/login";

import PrimaryHeader from './PrimaryHeader';
import "./layout.scss";
import PrimarySidebar from './PrimarySidebar';
import BasicLayout from "./BasicLayout";
import UnAuthLayout from "./UnAuthLayout";
import { Layout } from "antd";
const PrimaryLayout: React.FC<{}> = props=>{
	const location = useLocation();
	console.log("props11111111",props)
	//未登录跳转到login
	console.log("getToken", getToken());
	const token = getToken();
			const getUser = async (token: string | null) => {
        let res = await getUserInfo(token);
        console.log("userifno", res);
      };

	if(!getToken()) {
		console.log(3333)
		return <UnAuthLayout />;
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		getUser(token);
	}, [token])
	if(location.pathname==="/" || location.pathname==="/login") {
		return <Redirect to="/index" push={true} />;
	}
	return (
    <Layout>
      <div className="side-wrap">
        <PrimarySidebar />
      </div>
      <Layout className="main-wrap" style={{ marginLeft: "210px" }}>
        <PrimaryHeader />
        <div className="main-content">
          <BasicLayout />
        </div>
      </Layout>
    </Layout>
  );
}
export default PrimaryLayout