import { Form, Input, Button, message, Row, Col } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../Actions/SesionActions';
import axios from 'axios';
import { useState } from 'react';
import {API_HOST} from '../../config.json';
import {useHistory} from 'react-router-dom'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8  },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = (sesionData, cb) => {
    dispatch(loginAction(sesionData)) 
    cb()
  }

  const [form, setForm] = useState({
    user: "",
    pass: ""
  });

  const onFieldsChange = (current) => {
    setForm({
      ...form,
      [current[0].name[0]]: current[0].value
    })
  };
  
  const login = () => {
    axios.post(`${API_HOST}/login`, form).then(response => {

      if(!response.data.token){
        message.error(response.data.msg)
      }else{
        userLogin(response.data, () => {
          history.push("/products")
        })
      }


      // setToken(response.data.token);
      // setUser(response.data.user);

    }).catch(err => console.error(err))
  }


  return (
      <>
        <Row style={{marginTop: 100}}>
            <Col span={24}>
                <h2>Login</h2>
            </Col>
        </Row>
        <Row>
            <Col span={8} offset={8}>

                <Form
                    name="basic"
                    onFieldsChange={onFieldsChange}
                >
                <Form.Item
                    label="Username"
                    name="user"
                    
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="pass"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={login}>
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
      </>
  );
};

export default Login;