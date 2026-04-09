import {getAuth} from 'firebase/auth';
import { Navigate,Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div>
      {user ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
}

export default ProtectedRoute;
