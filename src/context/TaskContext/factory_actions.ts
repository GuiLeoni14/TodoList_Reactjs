import { createTask } from './actions';
import { ITaskAction } from './reducer';
import { TypesAction } from './reducer';

export const factory_actions = (dispatch: React.Dispatch<ITaskAction>) => {
    return {
        create: () => createTask(dispatch),
    };
};
