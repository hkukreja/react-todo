import React, { useState } from 'react';
import styles from './Todo.module.css';

// transforms input into string that can be used as HTML element IDs 
const IDSafe = (s: string) => s.replace(/ /g, '_');

interface TodoProps {
    title: string,
    done: boolean
}

const Todo: React.FC<TodoProps> = ({ title, done }) => {
    const [_done, setDone] = useState(done);

    function handleDoneToggle(e: React.ChangeEvent<HTMLInputElement>) {
        setDone(e.target.checked);
    }

    return (
        <div className={styles.Todo}>
            <input
                type="checkbox"
                name=""
                id={"item-done_" + IDSafe(title)}
                checked={_done}
                onChange={handleDoneToggle}
            />

            <div>{title}</div>
        </div>
    )
};


export default Todo;
