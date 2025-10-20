import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";


const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();

    // loading
    if(loading){
        <span className="loading loading-spinner loading-xl"></span>
    }
// not user 
if(!user){
    return <Navigate to={"/login"} replace/>
}
    return children;
};

export default PrivateRouter;