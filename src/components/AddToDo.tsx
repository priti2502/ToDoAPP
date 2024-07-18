import { FC, FormEvent, useState } from 'react'
import { AddToDoProps } from '../types';

const AddToDo: FC<AddToDoProps> = ({addToDo}) => {

    const [title, setTitle] = useState<string>('');
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        addToDo(title);
        setTitle('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
            <button type='submit' >Add Todo</button>
            <br />
           
        </form>
    )
}

export default AddToDo;