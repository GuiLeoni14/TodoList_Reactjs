import React, { Reducer, ReducerAction } from 'react';
import { ITaskAction } from '../context/TaskContext/reducer';
import { ITask } from './ITask';

export interface ITaskContext {
    stateTasks: ITask[];
    dispatchState: React.Dispatch<ITaskAction>;
}
