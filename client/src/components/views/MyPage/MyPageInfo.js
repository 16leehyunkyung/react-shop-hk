import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';

function MyPageInfo(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Title">{props.detail.title}</Descriptions.Item>
                <Descriptions.Item label="sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />


        </div>
    )
}

export default MyPageInfo
