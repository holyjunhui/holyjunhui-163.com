import React, {useEffect, useState} from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router-dom";

import { getCaptcha, getMeta, login, getUserInfo } from "../../api/login/login";
// import { setUserInfo, UserState, UserToken, setUserToken } from "../../store/module/user";

import { getToken } from "../../utils/auth";
import { useDispatch } from "redux-react-hook";

// interface LoginProps extends RouteComponentProps {
// 	setUserInfo:(userInfo: UserState) => void,
// 	setUserToken:(token: UserToken) =>void
// }
const LoginForm: React.FC<{}> = (props) => {
	const [captcha, setCaptcha] = useState<any>({});
	const dispatch = useDispatch();
	const history = useHistory();
		const getUser = async (token: string) => {
      let res = await getUserInfo(token);
      console.log("userifno", res);
    };
  const onFinish = async (values: any) => {
	const { email, password, captcha_value } = values;

		let res = await login({captcha_value, captcha_id:captcha?.id},{email,password});
		console.log("res",res)
		if(res.ok) {
			const token = res.data?.token;
			dispatch({ type: "setToken", token: token });
			// props.setUserInfo(token)
			getUser(token)
			history.push("/monitor");
		}

  };

	const getCode = async ()=>{
		let res = await getCaptcha()
		if(res?.ok) {
			setCaptcha(res.data);
		}else {
			console.log("error")
		}
	}

	useEffect(() => {
		getCode();
	},[]);

  return (
    <div className="login-wrap">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item name="captcha_value">
          <Input
            className="code-input"
            placeholder="请输入验证码"
            suffix={
              <img
                src={captcha?.image}
                alt=""
                className="code-img"
                onClick={getCode}
              />
            }
          />
        </Form.Item>
        {/* <Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
				</Form.Item> */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
// const LoginForm = Form.create({ name: "login" })(Login);
export default LoginForm;