import React from 'react';
import { Card, List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    word-break: break-all;
`;

const TodoListItem = ({ itemData, onDelete, onEdit }: Props) => (
    <List.Item>
        <StyledCard
            className="card-content"
            bodyStyle={{ maxHeight: '200px', overflowY: 'auto' }}
            title={itemData.date}
            actions={[
                <EditOutlined onClick={() => onEdit(itemData)} />,
                <DeleteOutlined onClick={() => onDelete(itemData.id || '')} />
            ]}
        >
            {itemData.content}
        </StyledCard>
    </List.Item>
);

interface Props {
    itemData: { id?: string; content?: string; date?: string };
    onDelete: (id: string) => void;
    onEdit: (item: object) => void;
}

export default TodoListItem;
