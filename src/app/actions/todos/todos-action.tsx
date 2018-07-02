import axios, { AxiosPromise, AxiosResponse, AxiosError } from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import { API_SETTINGS } from "../../utils/api/settings";
import { ACTION_TYPE } from "../../actions/actions";
import { assignHeader } from "../../utils/api/headers";
//INTERFACES
import { ITodo } from "./todos.d";
import { IReducers } from "./../../reducers/index.d";
//CONST
import { TOASTER } from "./../../utils/constants/toasters";

const apiurl: string = `${API_SETTINGS.API_URL}/todos`;

export function getTodos(): ThunkAction<
  Promise<ITodo | string>,
  IReducers,
  null
> {
  return function(dispatch: Dispatch<IReducers>): Promise<ITodo | string> {
    return axios
      .get(`${apiurl}`, assignHeader())
      .then((response: AxiosResponse): Promise<ITodo> => {
        dispatch({
          type: ACTION_TYPE.TODO.GET,
          todos: response.data
        });
        return response.data;
      })
      .catch((error: AxiosError): Promise<string> => {
        toast.error(TOASTER.API.ERROR.GET);
        return error.response
          ? Promise.reject(error.response.data.message)
          : Promise.reject("Could not retrieve todos");
      });
  };
}

export function createTodo(
  todo: ITodo
): ThunkAction<Promise<ITodo | string>, IReducers, null> {
  return function(dispatch: Dispatch<IReducers>): Promise<ITodo | string> {
    return axios
      .post(`${apiurl}`, todo, assignHeader())
      .then((response: AxiosResponse): Promise<ITodo> => {
        /* Right now there is not need to dispatch this action as on the todo list view we make get request on each view load
        dispatch({
          type: ACTION_TYPE.TODO.CREATE,
          todo
        });*/
        toast.success(TOASTER.API.SUCCESS.CREATED);
        return response.data;
      })
      .catch((error: AxiosError): Promise<string> => {
        toast.error(TOASTER.API.ERROR.POST);
        return error.response
          ? Promise.reject(error.response.data.message)
          : Promise.reject("Could not create todo");
      });
  };
}

export function updateTodo(
  todoId: string,
  text: string
): ThunkAction<Promise<ITodo | string>, IReducers, null> {
  return function(dispatch: Dispatch<IReducers>): Promise<ITodo | string> {
    return axios
      .put(`${apiurl}/` + todoId, { text }, assignHeader())
      .then((response: AxiosResponse): Promise<ITodo> => {
       /* Right now there is not need to dispatch this action as on the todo list view we make get request on each view load
        dispatch({
          type: ACTION_TYPE.TODO.UPDATE,
          todoId,
          text
        });
        */
       toast.info(TOASTER.API.SUCCESS.UPDATED);
        return response.data;
      })
      .catch((error: AxiosError): Promise<string> => {
        toast.error(TOASTER.API.ERROR.PUT);
        return error.response
          ? Promise.reject(error.response.data.message)
          : Promise.reject("Could not update todo");
      });
  };
}

export function deleteTodo(
  id: string
): ThunkAction<Promise<ITodo | string>, IReducers, null> {
  return function(dispatch: Dispatch<IReducers>): Promise<ITodo | string> {
    return axios
      .delete(`${apiurl}/` + id, assignHeader())
      .then((response: AxiosResponse): Promise<ITodo> => {
        dispatch({
          type: ACTION_TYPE.TODO.DELETE,
          id
        });
        toast.warn(TOASTER.API.SUCCESS.DELETED);
        return response.data;
      })
      .catch((error: AxiosError): Promise<string> => {
        toast.error(TOASTER.API.ERROR.DELETE);
        return error.response
          ? Promise.reject(error.response.data.message)
          : Promise.reject("Could not delete todo");
      });
  };
}

export function setCurrentTodo(id: string, text: string): Function {
  return function(dispatch: Dispatch<IReducers>): Promise<ITodo> {
    return new Promise((resolve, reject) =>
      dispatch({
        type: ACTION_TYPE.TODO.CURRENT,
        todo: {
          id,
          text
        }
      })
    );
  };
}
