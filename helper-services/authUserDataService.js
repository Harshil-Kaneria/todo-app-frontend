import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileSet, profileReSet } from "@/redux/reducers/slice/profileSlice";
import { useLazyProfileInfoQuery } from "@/services/user/profile";

// Make Function
const AuthUserDataService = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state?.persistedReducer?.user);

  const [login] = useLazyProfileInfoQuery();
  const getProfileDataApiCall = async (data = "") => {
    if (data == "") return 0;
    try {
      const response = await login(data);
      dispatch(profileSet(response?.data?.data));
    } catch (err) {
      dispatch(profileReSet());
    }
  };

  useEffect(() => {
    if (userAuth?.auth) {
      getProfileDataApiCall(userAuth.token);
    } else if (userAuth?.auth == false) {
      dispatch(profileReSet());
    }
  }, [userAuth]);
  return null;
};

// Export Function For Use in Another File
export default AuthUserDataService;
