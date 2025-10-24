import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/UseAuth";


const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    // loading
    if(loading){
        <span className="loading loading-spinner loading-xl"></span>
    }
// not user 
if(!user){
    return <Navigate to={"/login"} state={{from: location.pathname}} replace/>
}
    return children;
};

export default PrivateRouter;