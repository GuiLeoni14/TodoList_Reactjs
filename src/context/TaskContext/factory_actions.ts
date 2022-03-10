import { ITask } from '../../interfaces/ITask';
import { createTask, editTask, loadStorage } from './actions';
import { ITaskAction } from './reducer';
import { TypesAction } from './reducer';
export type FactoryProps = (dispatch: React.Dispatch<ITaskAction>) => {
    createTask: (values: ITask) => void;
    editTask: (id: string) => void;
    loadTask: () => void;
};

export const factory_actions: FactoryProps = (dispatch) => {
    return {
        createTask: (values) => createTask(dispatch, values),
        editTask: (id) => editTask(dispatch, id),
        loadTask: () => loadStorage(dispatch),
    };
};
