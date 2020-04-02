import React from 'react'
// import { Redirect } from "react-router-dom";

import user from '../views/manager/user'
import role from '../views/manager/role'
import monitor from '../views/monitor'
import Login from '../views/login'
// import system from './modules/system'
interface IRouteMeta {
	name:string,
	icon?:string
}
interface IRoute {
	path:string,
	key:string,
	  // 路由组件
  component?: any;
	redirect?:string,
	hidden?:boolean,
	meta?:IRouteMeta,
	subMenu?:IRoute[]

}
export  const routes: IRoute[] = [
					{
						path:"/login",
						key:"/login",
						component:Login,
						hidden:true
					},
          {
            path: "/monitor",
            key: "/monitor",
            component: monitor,
            meta: {
              name: "首页",
              icon: "icon-example"
            }
          },
          {
            path: "/manager",
            key: "/manager",
            meta: {
              name: "管理中心"
            },
            subMenu: [
              {
                path: "/manager/user",
                key: "manager/user",
                component: user,
                meta: {
                  name: "用户管理",
                  icon: "icon-example"
                }
              },
              {
                path: "/manager/role",
                key: "manager/role",
                component: role,
                meta: {
                  name: "权限管理",
                  icon: "icon-example"
                }
              }
            ]
          }
          // {
          //   path: "/system",
          //   key: "/system",
          //   meta: {
          //     name: "系统配置"
          //   },
          //   subMenu: [
          //     {
          //       path: "/system/operation",
          //       key: "system/operation",
          //       meta: {
          //         name: "运营配置",
          //         icon: "icon-example"
          //       }
          //     },
          //     {
          //       path: "/system/configure",
          //       key: "system/configure",
          //       meta: {
          //         name: "监测配置",
          //         icon: "icon-example"
          //       }
          //     }
          //   ]
          // }
        ];

function flattenRoute(routes: IRoute[]): IRoute[] {
  const result = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    result.push({
      ...route
    });
    if (route?.subMenu) {
      result.push(...flattenRoute(route.subMenu));
    }
  }
  return result;
}
export const getLayoutRoutes = flattenRoute(routes);