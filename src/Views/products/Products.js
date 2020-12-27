import React, { useEffect, useState } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import axios from 'axios'
import './Products.css';

const Products = () => {

    let [products, setProducts] = useState([]);


    axios.get(`http://localhost:3001/products`).then(response => {
        setProducts(response.data)
    }).catch(err => console.error(err))


    const { Content } = Layout;
    const { Meta } = Card;


    return <Content
        className="site-layout-background"
        style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
        }}
    >
        <Row>
            {
                products.map(product => console.log(product))
            }
                {/* // <Col span={6}>
                //     <Card
                //         hoverable
                //         style={{ width: 240 }}
                //         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                //     >
                //         <Meta title={product.name} description={product.desc} />
                //     </Card>
                // </Col> */}
        </Row>
    </Content>

}

export default Products;