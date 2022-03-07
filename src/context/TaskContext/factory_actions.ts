import { ITask } from '../../interfaces/ITask';
import { createTask, editTask } from './actions';
import { ITaskAction } from './reducer';
import { TypesAction } from './reducer';
export type FactoryProps = (
    dispatch: React.Dispatch<ITaskAction>,
    id?: string,
    values?: ITask,
) => {
    create: typeof createTask;
    editTask: typeof editTask;
};
/*
create: (dispatch: React.Dispatch<ITaskAction>, values: ITask) => void;
editTask: (dispatch: React.Dispatch<ITaskAction>, id: string) => void;
*/
export const factory_actions: FactoryProps = (dispatch, id, values) => {
    return {
        create: () => createTask(dispatch, values),
        editTask: () => editTask(dispatch, id),
    };
};
