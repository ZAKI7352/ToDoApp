import "./ToDo.css";
import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";
import { getLocalStorageData, setLocalStorageData } from "./ToDoLocalStorage";

export const ToDo = () => {
    const [task, setTask] = useState(() => getLocalStorageData());

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        //Check if the input field is empty
        if (!content) return;

        // if (task.includes(inputValue)) return;
        //Check if the task is already added
        const ifToDOContentMatched = task.find((curTask) => curTask.content === content);
        if (ifToDOContentMatched) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    //ToDo single handleDeleteToDo
    const handleDeleteToDo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    //All clear button
    const handleClearButton = () => {
        setTask([])
    }

    const handleCheckToDo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        });
        setTask(updatedTask);
    }

    //Add Data local storage
    setLocalStorageData(task)
    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
                <ToDoDateTime />
            </header>
            <ToDoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {
                        return (
                            <ToDoList
                                key={curTask.id}
                                curTask={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteToDo={handleDeleteToDo}
                                onHandleCheckToDo={handleCheckToDo}
                            />
                        )
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearButton}>All Clear</button>
            </section>
        </section>
    )
}