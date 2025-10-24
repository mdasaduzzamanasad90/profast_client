import { useLocation } from "react-router";

const useNavigateYourLocation = () => {
  const location = useLocation();

  const from = location.state?.from || "/";
  return from;
};

export default useNavigateYourLocation;
