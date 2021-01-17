import React, { useEffect, useState } from "react";
import { Layout, Card, Col, Row, Menu, Dropdown  } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Logo from '../../img/logo.png';
import axios from "axios";
import "./Products.css"; 
import {request} from '../../Helpers'


const { SubMenu, Item } = Menu;
const { Header, Sider } = Layout;

const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const getProductos = () => {
    return request.get("/products")
  };

  const handleMenuClick = () => {
    console.log('clicked')
  }

  const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />} onClick={handleMenuClick}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  const { Content } = Layout;
  const { Meta } = Card;

  return(

    <Layout>
      <Header className="header">
        <div className="header-left">
          <div className="logo">
            <img src={Logo} id="brand-logo" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Item key="1">nav 1</Item>
            <Item key="2">nav 2</Item>
            <Item key="3">nav 3</Item>
          </Menu>
        </div>
        <Dropdown.Button
          overlay={menu}
          placement="bottomLeft"
          icon={<UserOutlined />}
        >
          #USERNAME#
        </Dropdown.Button>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Item key="1">option1</Item>
              <Item key="2">option2</Item>
              <Item key="3">option3</Item>
              <Item key="4">option4</Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Item key="5">option5</Item>
              <Item key="6">option6</Item>
              <Item key="7">option7</Item>
              <Item key="8">option8</Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Item key="9">option9</Item>
              <Item key="10">option10</Item>
              <Item key="11">option11</Item>
              <Item key="12">option12</Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row>
              {products.map((product) => (
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta title={product.name} description={product.desc} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default Products;
