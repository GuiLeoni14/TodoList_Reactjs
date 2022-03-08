import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
export const createTask = (dispatch: React.Dispatch<ITaskAction>, values: ITask) => {
    const _tasks = localStorage.getItem('tasks') || '[]';
    const beforeStorage: ITask[] | null = JSON.parse(_tasks);
    console.log(beforeStorage);
    beforeStorage
        ? localStorage.setItem('tasks', JSON.stringify([...beforeStorage, values]))
        : localStorage.setItem('tasks', JSON.stringify([values]));
    loadStorage(dispatch);
    dispatch({ type: TypesAction.CREATE_TASK });
};

export const editTask = (dispatch: React.Dispatch<ITaskAction>, id: string): void => {
    console.log(id);
    dispatch({ type: TypesAction.EDIT_TASK });
};

export const loadStorage = (dispatch: React.Dispatch<ITaskAction>) => {
    const _tasks = localStorage.getItem('tasks') || '[]';
    const storage = JSON.parse(_tasks);
    dispatch({ type: TypesAction.LOAD_TASK, payload: storage });
};
