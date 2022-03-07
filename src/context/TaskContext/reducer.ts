import { ITask } from '../../interfaces/ITask';
import { InitialState } from './data';
import { Reducer } from 'react';
export enum TypesAction {
    CREATE_TASK = 'CREATE_TASK',
    EDIT_TASK = 'EDIT_TASK',
}

export interface ITaskAction {
    type: TypesAction;
    payload?: ITask[];
}
export const reducer: Reducer<InitialState, ITaskAction> = (state, action) => {
    switch (action.type) {
        case TypesAction.CREATE_TASK:
            return { ...state, tasks: action.payload };
    }
    return { ...state };
};
