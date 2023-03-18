import React from 'react';
import { List } from 'antd';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ data, onDeleteItem, onEditItem }: Props) => (
    <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 6
        }}
        dataSource={data}
        renderItem={item => (
            <TodoListItem itemData={item} onDelete={onDeleteItem} onEdit={onEditItem} />
        )}
    />
);

interface Props {
    data: Array<object>;
    onDeleteItem: (id: string) => void;
    onEditItem: (item: object) => void;
}

export default TodoList;
