import React, { createContext, useContext, useState } from 'react';
import { data, InitialState } from './data';
import { ITask } from '../../interfaces/ITask';
import { ITaskAction } from './reducer';
export type TaskProps = {
    stateTasks: InitialState;
    dispatchTasks: React.Dispatch<ITaskAction>;
};

export const TaskContext = createContext({} as TaskProps);
