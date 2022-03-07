import { ITask } from '../../interfaces/ITask';
import { TypesAction } from './reducer';
import { ITaskAction } from './reducer';
export const createTask = (dispatch: React.Dispatch<ITaskAction>, values: ITask) => {
    dispatch({ type: TypesAction.CREATE_TASK, payload: [values] });
};

export const editTask = (dispatch: React.Dispatch<ITaskAction>, id: string): void => {
    console.log(id);
    dispatch({ type: TypesAction.EDIT_TASK });
};
