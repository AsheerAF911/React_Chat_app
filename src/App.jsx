import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PublicRoute from './component/PublicRoute';
import PrivateRoute from './component/PrivateRoute';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
