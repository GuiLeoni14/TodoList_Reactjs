import React, { createContext, useContext, useState } from 'react';
import { data, InitialState } from './data';
import { ITask } from '../../interfaces/ITask';
import { ITaskAction } from './reducer';
import { FactoryProps } from './factory_actions';
import { createTask, editTask, loadStorage } from './actions';
export type ActionsProps = {
    createTask: (values: ITask) => void;
    editTask: (id: string) => void;
    loadTask: () => void;
};
export type TaskProps = {
    stateTasks: InitialState;
    actions: ActionsProps;
};

export const TaskContext = createContext({} as TaskProps);
