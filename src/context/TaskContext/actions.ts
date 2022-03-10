import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
import axios from 'axios';
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

export const loadStorage = async (dispatch: React.Dispatch<ITaskAction>) => {
    dispatch({ type: TypesAction.LOADING });
    try {
        const { data } = await axios.get('https://chronos.compraqui.app/api/tasks');
        console.log(data);
        dispatch({ type: TypesAction.LOAD_TASK, payload: data });
    } catch (e) {
        console.log(e);
    }
};
