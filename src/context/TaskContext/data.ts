import { ITask } from '../../interfaces/ITask';
export type InitialState = {
    tasks: ITask[];
    loading: boolean;
};
export const data: InitialState = {
    tasks: [],
    loading: true,
};
