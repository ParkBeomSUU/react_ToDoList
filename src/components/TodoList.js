import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (<TodoListItem todo={todo} key={todo.id}
       onRemove={onRemove}
       onToggle={onToggle}
       />//키 값에 각 아이디를 부여
      ))}

    </div>
  );
};

export default TodoList;
//props로 받아온 todos 배열을 배열 내장함수 map을 통해 todolistitem으로 이루어진 배열로 변환하여 렌더링
//map으로 변환할때는 key props를 전달해주어야 한다.
//todo 데이터는 통째로 props로 전달해준다.
