//import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {useAuthState} from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "./index"
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }
console.log(user, error);
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;
