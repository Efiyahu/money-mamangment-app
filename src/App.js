import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn';
import Home from './pages/home/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
