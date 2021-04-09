import React, {useState} from 'react';
import './index';

interface todoProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<todoProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('');
    const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title);
            setTitle('');
        }
    };

  return (
    <div className="field">
        <input id='title' onChange={changeTitleHandler} value={title} onKeyPress={keyPressHandler} type='text'/>
        <label htmlFor='title'>Введите название дела</label>
    </div>
  );
};

export default TodoForm;