import { useState, useRef,useCallback } from 'react';
 //이를 사용하여 todos 라는 상태를 정의하고 todos를 todolist의 props로 전달한다.
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () =>{
  const [todos, setTodos] = useState([//동적인 상태로만들어주기
    {
      id:1,
      text :'리액트 구조파악',
      checked: true,
    },
    {
      id:2,
      text :'자바스크립트 공부',
      checked: true,
    },
    {
      id:3,
      text :'정보처리기사 공부',
      checked: false,
    },
  ]);
  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId=useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1; //nextid에 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return(
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} />
  </TodoTemplate>
  );
}
export default App;

//이배열은 todolist에 props로 전달된다. todolist에서 이 값을 받아 온후 
//todoitem으로 변환하여 렌더링하도록 설정