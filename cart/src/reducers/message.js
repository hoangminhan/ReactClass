import * as types from "./../constants/ActionType";
import * as message from "./../constants/Message";
let initialState = message.MSG_WELLCOME;

const Message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default Message;
