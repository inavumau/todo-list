import React, { useEffect, useState } from 'react';
import './TodoListItemPopup.css';
import { Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const TodoListItemPopup = ({ show, onAdd, onCancel, defaultContent }: Props) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!show) {
            setContent('');
        }
    }, [show]);

    useEffect(() => {
        if (defaultContent) {
            setContent(defaultContent);
        }
    }, [defaultContent]);

    return (
        <Modal
            title={defaultContent ? 'Редактировать запись' : 'Добавить запись'}
            open={show}
            cancelText="Отмена"
            onCancel={onCancel}
            onOk={() => {
                onAdd(content, !!defaultContent);
                onCancel();
            }}
            okButtonProps={{ disabled: !content || defaultContent === content }}
        >
            <TextArea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Введите текст..."
                autoSize={{ minRows: 3, maxRows: 6 }}
            />
        </Modal>
    );
};

interface Props {
    show: boolean;
    onCancel: () => void;
    onAdd: (content: string, edit: boolean) => void;
    defaultContent?: string;
}

export default TodoListItemPopup;
