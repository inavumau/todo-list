import React from 'react';
import './TodoListItem.css';
import { Card, List } from 'antd';

const TodoListItem = ({ itemData }: Props) => (
    <List.Item>
        <Card
            className="card-content"
            bodyStyle={{ maxHeight: '200px', overflowY: 'auto' }}
            title={itemData.date}
        >
            {itemData.content}
        </Card>
    </List.Item>
);

interface Props {
    itemData: { content?: string; date?: string };
}

export default TodoListItem;
