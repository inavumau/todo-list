import React, { useState } from 'react';
import './App.css';
import { FloatButton, Layout } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Content } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from './components/TodoList/TodoList';
import TodoListItemPopup from './components/TodoListItemPopup/TodoListItemPopup';

const todoData = [
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
    const [todoListData, setTodoListData] = useState(todoData);
    const [showListItemPopup, setShowListItemPopup] = useState(false);
    const [changingListItem, setChangingListItem] = useState<{ id?: string; content?: string }>({});

    const addTodoItem = (content: string, edit = false) => {
        if (!edit) {
            setTodoListData([
                ...todoListData,
                { id: uuidv4(), content, date: moment().format('MMMM Do YYYY, hh:mm:ss') }
            ]);
        } else {
            setTodoListData(
                todoListData.map(item =>
                    item.id === changingListItem.id
                        ? { ...item, content, date: moment().format('MMMM Do YYYY, hh:mm:ss') }
                        : item
                )
            );
            setChangingListItem({});
        }
    };

    const deleteTodoItem = (id: string) =>
        setTodoListData(todoListData.filter(item => item.id !== id));

    const editTodoItem = (item: object) => {
        setChangingListItem(item);
        setShowListItemPopup(true);
    };

    return (
        <Layout className="app">
            <Content className="app-content">
                <TodoList
                    data={todoListData}
                    onDeleteItem={deleteTodoItem}
                    onEditItem={editTodoItem}
                />
                <TodoListItemPopup
                    onAdd={addTodoItem}
                    onCancel={() => {
                        setShowListItemPopup(false);
                        setChangingListItem({});
                    }}
                    show={showListItemPopup}
                    defaultContent={changingListItem.content}
                />
                <FloatButton
                    className="app-content-add-button"
                    onClick={() => setShowListItemPopup(true)}
                    icon={<PlusOutlined />}
                />
            </Content>
        </Layout>
    );
};

export default App;
