import React, { useEffect, useState } from 'react';
import './TodoListItemPopup.css';
import { Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const TodoListItemPopup = ({ show, onAdd, onCancel }: Props) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!show) {
            setContent('');
        }
    }, [show]);

    return (
        <Modal
            title="Добавить запись"
            open={show}
            onCancel={onCancel}
            onOk={() => {
                onAdd(content);
                onCancel();
            }}
        >
            <TextArea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Введите текст..."
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
        </Modal>
    );
};

interface Props {
    show: boolean;
    onCancel: () => void;
    onAdd: (content: string) => void;
}

export default TodoListItemPopup;
