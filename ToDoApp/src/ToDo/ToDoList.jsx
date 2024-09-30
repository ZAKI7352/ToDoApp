import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({ curTask, checked, onHandleCheckToDo, onHandleDeleteToDo }) => {

    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{curTask}</span>
            <button className="check-btn" onClick={() => onHandleCheckToDo(curTask)}>
                <MdCheck />
            </button>
            <button className="delete-btn"
                onClick={() => onHandleDeleteToDo(curTask)}
            >
                <MdDeleteForever />
            </button>
        </li>
    )
}