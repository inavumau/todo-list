import React from 'react';
import './TodoListItem.css';
import { Card, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoListItem = ({ itemData, onDelete }: Props) => (
    <List.Item>
        <Card
            className="card-content"
            bodyStyle={{ maxHeight: '200px', overflowY: 'auto' }}
            title={itemData.date}
            actions={[<DeleteOutlined onClick={() => onDelete(itemData.id || '')} />]}
        >
            {itemData.content}
        </Card>
    </List.Item>
);

interface Props {
    itemData: { id?: string; content?: string; date?: string };
    onDelete: (id: string) => void;
}

export default TodoListItem;
