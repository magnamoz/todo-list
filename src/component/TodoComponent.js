import { useState } from "react";
import { Container, Button, List, TaskCount, Tasks, Text, Title, Paragraph, ListContainer, ListUl} from "./styles"

function TodoComponent() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedCounter, setCompletedCounter] = useState(0);
  
  const id = todoList.length + 1;

  const handleClick = () => {
    setTodoList([...todoList, {id: id, task: task, complete: false}])
    setTask("");
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          setCompletedCounter(completedCounter + 1);
        } else {
          setCompletedCounter(completedCounter - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };

  return (
    <Container>
      <Title>Todo List</Title>
      <Paragraph>Adicione seus afazeres e clique após concluir :)</Paragraph>
      <Text value={task} onInput={(e) => setTask(e.target.value)} placeholder="Adicione aqui sua tarefa" />
      <Button onClick={() => handleClick()}>Add</Button>
      <Tasks>
        <TaskCount>
          <b>Ações Pendentes</b> {todoList.length - completedCounter}
        </TaskCount>
        <TaskCount>
          <b>Ações completas</b> {completedCounter}
        </TaskCount>
      </Tasks>
      <ListContainer>
        <ListUl>
          {todoList.map((todo) => {
            return (
              <List
                complete={todo.complete}
                id={todo.id}
                onClick={() => handleComplete(todo.id)}
                style={{
                  listStyle: "none",
                  textDecoration: todo.complete && "line-through",
                }}
              >
                {todo.task}
              </List>
            );
          })}
        </ListUl>
      </ListContainer>
    </Container>
  );
}

export default TodoComponent;
