import React, { useState } from 'react';
import { FloatButton, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoList from './components/TodoList/TodoList';
import TodoListItemPopup from './components/TodoListItemPopup/TodoListItemPopup';
import { addTodoItem, deleteTodoItem, editTodoItem } from './store/todosActions';

const StyledLayout = styled(Layout)`
    min-height: 100vh;
`;

const StyledContent = styled(Content)`
    padding: 25px 50px;
`;

const StyledFloatButton = styled(FloatButton)`
    height: 50px;
    width: 50px;
`;

const App = ({ todoData = [], addItem, deleteItem, editItem }: Props) => {
    const [showItemPopup, setShowItemPopup] = useState(false);
    const [changingListItem, setChangingListItem] = useState<{ id?: string; content?: string }>({});

    const addTodoItemHandler = (content: string, edit = false) => {
        if (!edit) {
            addItem(content);
        } else {
            editItem(changingListItem.id || '', content);
            setChangingListItem({});
        }
    };

    const deleteTodoItemHandler = (id: string) => deleteItem(id);

    const startEditTodoItem = (item: object) => {
        setChangingListItem(item);
        setShowItemPopup(true);
    };

    return (
        <StyledLayout>
            <StyledContent>
                <TodoList
                    data={todoData}
                    onDeleteItem={deleteTodoItemHandler}
                    onEditItem={startEditTodoItem}
                />
                <TodoListItemPopup
                    onAdd={addTodoItemHandler}
                    onCancel={() => {
                        setShowItemPopup(false);
                        setChangingListItem({});
                    }}
                    show={showItemPopup}
                    defaultContent={changingListItem.content}
                />
                <StyledFloatButton onClick={() => setShowItemPopup(true)} icon={<PlusOutlined />} />
            </StyledContent>
        </StyledLayout>
    );
};

interface Props {
    todoData: Array<object>;
    addItem: (content: string) => void;
    deleteItem: (id: string) => void;
    editItem: (id: string, content: string) => void;
}

const mapStateToProps = (state: { todos: Array<object> }) => ({
    todoData: state.todos
});

const mapDispatchToProps = {
    addItem: addTodoItem,
    deleteItem: deleteTodoItem,
    editItem: editTodoItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
