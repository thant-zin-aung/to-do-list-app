import Header from "./Header/Header"
import { TaskContainer } from "./TaskContainer"
import PageStyle from './HomePage.module.css'

export function HomePage({onClickNewTask, clickableButtons}) {
    return (
        <div className={PageStyle.page}>
            <Header />
            <TaskContainer onClickNewTask={onClickNewTask} clickableButtons={clickableButtons}/>
        </div>
    )
}