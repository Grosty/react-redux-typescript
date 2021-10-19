import * as userActionCreators from "./user";
import * as todoActionCreators from "./todo";

const actionCreators = {
  ...userActionCreators,
  ...todoActionCreators,
};

export default actionCreators;
