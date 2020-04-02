import React, { useState } from "react";
import { Route as ReactRoute, Redirect, useLocation } from "react-router-dom";
import { Layout, Row, Col } from "antd";

import BasicLayout from "./BasicLayout";
import "./layout.scss";

const UnAuthLayout: React.FC<{}> = props => {
  const location = useLocation();
  if (location.pathname !== "/login") {
    return <Redirect to="login" push={true} />;
  }

  return (
    <ReactRoute>
      <Layout className="un-auth-layout">
        <BasicLayout></BasicLayout>
        <Redirect from="/" to="/login" push={true}></Redirect>
        <div className="footer">
          <p>just fro fun</p>
        </div>
      </Layout>
    </ReactRoute>
  );
};

export default UnAuthLayout;