import { ITask } from '../../interfaces/ITask';
import { createTask, editTask } from './actions';
import { ITaskAction } from './reducer';
import { TypesAction } from './reducer';
export type FactoryProps = (dispatch: React.Dispatch<ITaskAction>) => {
    createTask: (values: ITask) => typeof createTask;
    editTask: (id: string) => typeof editTask;
};

export const factory_actions: FactoryProps = (dispatch) => {
    return {
        createTask: (values) => createTask(dispatch, values),
        editTask: (id) => editTask(dispatch, id),
    };
};
