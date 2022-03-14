import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
import axios from 'axios';
export const createTask = async (dispatch: React.Dispatch<ITaskAction>, values: ITask) => {
    try {
        await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}`, values);
        await loadStorage(dispatch);
        dispatch({ type: TypesAction.CREATE_TASK });
    } catch (e) {
        console.log(e);
    }
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
