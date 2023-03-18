import React from 'react';
import './TodoList.css';
import { List } from 'antd';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ data }: Props) => (
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
        renderItem={item => <TodoListItem itemData={item} />}
    />
);

interface Props {
    data: Array<object>;
}

export default TodoList;
