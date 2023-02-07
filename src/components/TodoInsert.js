import { useState,useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert }) => {
    const [value, setValue]= useState('');
    const onChange= useCallback(e =>{
        setValue(e.target.value);
    },[]);
    const onSubmit =useCallback(
        e => {
            onInsert(value);
            setValue(''); //value값 초기화
            //submit는 브라우저에서 새로고침을 발생 시키므로 방지를 위하여 호출
            e.preventDefault();


        },
        [onInsert, value],
    );

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력해봐' 
            value={value}
            onChange={onChange}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};
export default TodoInsert;