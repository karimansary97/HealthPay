import {create} from 'zustand';
import TodoListType, {TodoItem} from '../types/TodoList.type';

type TodoStore = {
  todos: TodoListType;
  addTodo: (todo: TodoItem) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newTitle: string, newDesc: string) => void;
  toggleTodoComplete: (id: string, done: boolean) => void;
};

const useTodoStore = create<TodoStore>(set => ({
  todos: [{id: '1', title: 'kareem', desc: 'hi There', done: true}],
  addTodo: todo => set(state => ({todos: [...state.todos, todo]})),
  removeTodo: id =>
    set(state => ({
      todos: state.todos.filter(({id: itemId}) => itemId !== id),
    })),
  editTodo: (id, newTitle, newDesc) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? {...todo, title: newTitle, desc: newDesc} : todo,
      ),
    })),
  toggleTodoComplete: (id, done) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? {...todo, done} : todo)),
    })),
}));

export default useTodoStore;
