import React from 'react';
import { Layout, Menu, Card, Col, Row, Dropdown  } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Products from './Views/products/Products'
import AppRouter from './router'; 
import './App.css';
import 'antd/dist/antd.css';

import Logo from './img/logo.png';

const { SubMenu, Item } = Menu;
const { Header, Sider } = Layout;

// export default () => {
  
// }

function App() {

  // const handleMenuClick = () => console.log('clicked')

  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>

  );
}

export default App;


