import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
export const createTask = (dispatch: React.Dispatch<ITaskAction>) => {
    const data: ITask = {
        name: 'Guilherme',
        description: 'Testando',
    };
    console.log('Fui chamado');
    return dispatch({ type: TypesAction.CREATE_TASK, payload: [data] });
};
