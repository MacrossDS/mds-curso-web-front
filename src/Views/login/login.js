import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8  },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {


  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


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
                    onFinish={onFinish}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
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