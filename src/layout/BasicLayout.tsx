import React, { Fragment } from "react";
import { Route as ReactRoute, Switch, Redirect } from "react-router-dom";
import { getLayoutRoutes } from "../routes";
// console.log("falttenroute", getLayoutRoutes);
const BasicLayout: React.FC<{}> = props=>{
	
	return (
    <Switch>
      <Fragment>
        {getLayoutRoutes
          .filter(item => item?.component)
          .map(route => {
            let PageComponents = route.component;
            // console.log("PageComponents", PageComponents);
            return (
              <ReactRoute
                exact
                key={route.key}
                path={route.path}
                render={props => {
                  // if(props.route.redirect) {
                  // 	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  // 	 return <Redirect to={props.route.redirect!} push />;
                  // }
                  return <PageComponents {...props} />;
                }}
              ></ReactRoute>
            );
          })}
      </Fragment>
    </Switch>
  );
}
export default BasicLayout;