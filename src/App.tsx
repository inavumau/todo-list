import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Content } from 'antd/es/layout/layout';
import TodoList from './components/TodoList/TodoList';

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

const App = () => (
    <Layout className="app">
        <Content className="app-content">
            <TodoList data={TodoData} />
        </Content>
    </Layout>
);

export default App;
