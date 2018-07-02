import { AxiosPromise } from "axios";

export interface IAction {
    type: string;
    payload?: AxiosPromise;
}
