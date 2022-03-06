import { ReactNode } from 'react';
import { useReducer, useState } from 'react';
import { TaskContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { TaskProps } from './context';
import { ITask } from '../../interfaces/ITask';
type TaskProviderProps = {
    children: React.ReactNode;
};
export function TaskProvider({ children }: TaskProviderProps) {
    const [stateTasks, dispatchTasks] = useReducer(reducer, data);
    return <TaskContext.Provider value={{ stateTasks, dispatchTasks }}>{children}</TaskContext.Provider>;
}
