import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
export const createTask = (dispatch: React.Dispatch<ITaskAction>, values?: ITask) => {
    values = { name: 'Guilherme', description: 'testando' };
    return dispatch({ type: TypesAction.CREATE_TASK, payload: [values] });
};

export const editTask = (dispatch: React.Dispatch<ITaskAction>, id?: string) => {
    console.log('Fui chamado');
    return dispatch({ type: TypesAction.EDIT_TASK });
};
