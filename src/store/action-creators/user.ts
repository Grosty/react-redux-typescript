import { IUser, UserAction, UserActionType } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers =
  () =>
  async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({
        type: UserActionType.FETCH_USERS,
      });
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionType.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR,
        payload: "Users loading error",
      });
    }
  };
