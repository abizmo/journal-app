import { LOGIN, LOGOUT } from '../actions/authActions';

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...payload };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

export default authReducer;
