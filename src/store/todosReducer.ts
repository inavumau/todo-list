import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const todoDataInit = [
    {
        id: uuidv4(),
        content: 'test content',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    },
    {
        id: uuidv4(),
        content: 'test content2',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    },
    {
        id: uuidv4(),
        content: 'test content3',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    },
    {
        id: uuidv4(),
        content: 'test content4',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    },
    {
        id: uuidv4(),
        content: 'test content5',
        date: moment().format('MMMM Do YYYY, hh:mm:ss')
    }
];

const todosReducer = (state = todoDataInit, action: any = {}) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return [
                ...state,
                {
                    id: uuidv4(),
                    content: action.payload,
                    date: moment().format('MMMM Do YYYY, hh:mm:ss')
                }
            ];
        case 'DELETE_TODO_ITEM':
            return state.filter(item => item.id !== action.payload);
        case 'EDIT_TODO_ITEM':
            return state.map(item =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          content: action.payload.content,
                          date: moment().format('MMMM Do YYYY, hh:mm:ss')
                      }
                    : item
            );
        default:
            return state;
    }
};

export default todosReducer;
