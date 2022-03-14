import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn';
import Home from './pages/home/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile/Profile';
import NewAction from './pages/new-action/NewAction';
import { MonthContextProvider } from './components/context/MonthContext';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <MonthContextProvider>
      <div className="body-container">
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute path="/profile/" />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/new-action" element={<NewAction />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile/:userId/settings" element={<Settings />} />
        </Routes>
      </div>
    </MonthContextProvider>
  );
}

export default App;
