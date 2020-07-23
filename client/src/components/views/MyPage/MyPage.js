import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MypageInfo from './MyPageInfo';
import {Col, Row} from 'antd';


function MyPage(props) {
    const [Product, setProduct] = useState({})

    const userId = props.match.params.userId
    console.log(userId)
    useEffect(() => {
        axios.get(`/api/product/products_by_user?user=${userId}&type=array`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])


    return (
        <div style={{ width: '100%', padding: '3rem 4rem' }}>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{Product.title}</h1>
        </div>

        <br />
        mypage~!
        <Row gutter={[16, 16]} >
            <Col lg={12} sm={24}>
                {/* mypageInfo */}
                <MypageInfo detail={Product} />
            </Col>
        </Row>





       </div>
    )
}

export default MyPage
