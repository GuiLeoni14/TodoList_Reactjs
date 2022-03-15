import { ITask } from '../../interfaces/ITask';
import { InitialState } from './data';
import { Reducer } from 'react';
export enum TypesAction {
    LOADING = 'LOADING',
    LOAD_TASK = 'LOAD_TASK',
    CREATE_TASK = 'CREATE_TASK',
    EDIT_TASK = 'EDIT_TASK',
    ERROR = 'ERROR',
}

export interface ITaskAction {
    type: TypesAction;
    payload?: ITask[];
}
export const reducer: Reducer<InitialState, ITaskAction> = (state, action) => {
    switch (action.type) {
        case TypesAction.LOADING:
            return { ...state, loading: true };
        case TypesAction.LOAD_TASK:
            return { ...state, tasks: action.payload, loading: false };
        case TypesAction.CREATE_TASK:
            return { ...state };
        case TypesAction.ERROR:
            return { ...state, error: true };
    }
    return { ...state };
};
