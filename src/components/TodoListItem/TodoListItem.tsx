import React from 'react';
import './TodoListItem.css';
import { Card, List } from 'antd';

const TodoListItem = ({ itemData }: Props) => (
    <List.Item>
        <Card title={itemData.date}>{itemData.content}</Card>
    </List.Item>
);

interface Props {
    itemData: { content?: string; date?: string };
}

export default TodoListItem;
