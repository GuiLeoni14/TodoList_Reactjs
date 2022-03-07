import { useContext } from 'react';
import { ActionsProps, TaskContext } from '../context/TaskContext/context';
import { ITaskAction } from '../context/TaskContext/reducer';
import { ITask } from '../interfaces/ITask';
type UseTask = {
    tasks?: ITask[];
    loading: boolean;
    actions: ActionsProps;
};
export function useTaskContext(): UseTask {
    const {
        stateTasks: { tasks, loading },
        actions,
    } = useContext(TaskContext);
    return { tasks, actions, loading };
}
