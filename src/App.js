import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn';
import Home from './pages/home/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile/Profile';
import NewAction from './pages/new-action/NewAction';
import { MonthContextProvider } from './components/context/MonthContext';

function App() {
  return (
    <MonthContextProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/new-action" element={<NewAction />} />
        </Routes>
      </div>
    </MonthContextProvider>
  );
}

export default App;
