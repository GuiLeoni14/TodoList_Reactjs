import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
import axios from 'axios';
export const createTask = async (dispatch: React.Dispatch<ITaskAction>, values: ITask): Promise<void> => {
    dispatch({ type: TypesAction.LOADING });
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}`, values);
        console.log(data);
        await loadStorage(dispatch);
        dispatch({ type: TypesAction.CREATE_TASK });
    } catch (e) {
        console.log(e);
    }
};

export const editTask = async (dispatch: React.Dispatch<ITaskAction>, values: ITask): Promise<void> => {
    dispatch({ type: TypesAction.LOADING });
    try {
        const { data } = await axios.patch(`${import.meta.env.VITE_REACT_APP_URL_API}/${values.guid}`, values);
        console.log(data);
        await loadStorage(dispatch);
        dispatch({ type: TypesAction.EDIT_TASK });
    } catch (e) {
        console.log(e);
    }
};

export const loadStorage = async (dispatch: React.Dispatch<ITaskAction>): Promise<void> => {
    dispatch({ type: TypesAction.LOADING });
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_URL_API}`);
        console.log(data);
        dispatch({ type: TypesAction.LOAD_TASK, payload: data });
    } catch (e) {
        console.log(e);
    }
};
