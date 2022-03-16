import { ITask } from '../../interfaces/ITask';
import { createTask, deleteTask, editTask, loadStorage } from './actions';
import { ITaskAction } from './reducer';
import { TypesAction } from './reducer';
export type FactoryProps = (dispatch: React.Dispatch<ITaskAction>) => {
    createTask: (values: ITask) => Promise<void>;
    editTask: (values: ITask) => Promise<void>;
    deleteTask: (id: string | number) => Promise<void>;
    loadTask: () => Promise<void>;
};

export const factory_actions: FactoryProps = (dispatch) => {
    return {
        createTask: (values) => createTask(dispatch, values),
        editTask: (values) => editTask(dispatch, values),
        deleteTask: (id) => deleteTask(dispatch, id),
        loadTask: () => loadStorage(dispatch),
    };
};
