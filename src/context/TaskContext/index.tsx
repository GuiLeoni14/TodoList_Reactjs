import { ReactNode } from 'react';
import { useReducer, useState } from 'react';
import { TaskContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { TaskProps } from './context';
import { ITask } from '../../interfaces/ITask';
import { factory_actions } from './factory_actions';
type TaskProviderProps = {
    children: React.ReactNode;
};
export function TaskProvider({ children }: TaskProviderProps) {
    const [stateTasks, dispatch] = useReducer(reducer, data);
    const actions = factory_actions(dispatch);
    return <TaskContext.Provider value={{ stateTasks, actions }}>{children}</TaskContext.Provider>;
}
