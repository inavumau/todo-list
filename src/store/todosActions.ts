export const addTodoItem = (content: string) => (dispatch: (object: object) => void) => {
    dispatch({ type: 'ADD_TODO_ITEM', payload: content });
};

export const deleteTodoItem = (id: string) => (dispatch: (object: object) => void) => {
    dispatch({ type: 'DELETE_TODO_ITEM', payload: id });
};

export const editTodoItem =
    (id: string, content: string) => (dispatch: (object: object) => void) => {
        dispatch({ type: 'EDIT_TODO_ITEM', payload: { id, content } });
    };
