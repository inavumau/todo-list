import React, { useState } from 'react';
import './App.css';
import { FloatButton, Layout } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Content } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from './components/TodoList/TodoList';
import TodoListItemPopup from './components/TodoListItemPopup/TodoListItemPopup';

const TodoData = [
    {
        id: uuidv4(),
        content: 'test content',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    },
    {
        id: uuidv4(),
        content: 'test content2',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    }
];

const App = () => {
    const [TodoListData, setTodoListData] = useState(TodoData);
    const [addingListItem, setAddingListItem] = useState(false);

    const addTodoItem = (content: string) => {
        setTodoListData([
            ...TodoListData,
            { id: uuidv4(), content, date: moment().format('MMMM Do YYYY, hh:mm:ss') }
        ]);
    };

    return (
        <Layout className="app">
            <Content className="app-content">
                <TodoList data={TodoListData} />
                <TodoListItemPopup
                    onAdd={addTodoItem}
                    onCancel={() => setAddingListItem(false)}
                    show={addingListItem}
                />
                <FloatButton
                    className="app-content-add-button"
                    onClick={() => setAddingListItem(true)}
                    icon={<PlusOutlined />}
                />
            </Content>
        </Layout>
    );
};

export default App;
