import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logoutUser = async (dispatch) => {
try {
  // Perform the server-side logout action (if required)
  // Example: await publicRequest.post("/auth/logout");

  // Dispatch the logout action to update the user state in Redux
  dispatch(logout());
} catch (error) {
  // Handle any errors that may occur during the logout process
  console.error("Logout failed:", error);
}
};
