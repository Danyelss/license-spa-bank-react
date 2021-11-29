import './App.css';
import { getAccessToken, 
  //getRefreshToken
} from './token/Tokens';

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/404" element={<ErrorPage />} />
          {/*<Route path="*" element={<Navigate replace to="/404" />} />*/}
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
  const auth = getAccessToken();

  return auth ? children : <Navigate to="/login" />;
}

export default App;
