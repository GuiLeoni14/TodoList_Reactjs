import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext/context';
import { ITaskAction } from '../context/TaskContext/reducer';
import { ITask } from '../interfaces/ITask';
type UseTask = {
    tasks: ITask[];
    loading: boolean;
    dispatchTasks: React.Dispatch<ITaskAction>;
};
export function useTaskContext(): UseTask {
    const {
        stateTasks: { tasks, loading },
        dispatchTasks,
    } = useContext(TaskContext);
    return { tasks, dispatchTasks, loading };
}
