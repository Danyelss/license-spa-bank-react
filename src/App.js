import './App.css';
import {existsAccessToken, getAccessToken, getRefreshToken} from './token/Tokens';

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

import {
  Routes,
  Route,
  BrowserRouter,
  //Link,
  Navigate,
  //Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<HomePage />} />*/}
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute({ children }) {

  //const tokenFunction = useToken();

  if(!existsAccessToken){
    console.log("mue");
  }

  const auth = getAccessToken();

  return auth ? children : <Navigate to="/login" />;
}

export default App;
