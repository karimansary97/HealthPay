type TodoListType = TodoItem[];

export type TodoItem = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
};

export default TodoListType;
