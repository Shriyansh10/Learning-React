import { useEffect, useState } from "react";
import './App.css'
import { useDispatch } from "react-redux";
import { authService } from "./appwrite";
import { setIsLoggedIn, setIsLoggedOff } from "./features/loggedin";
import { Header, Footer } from "./components";
import { Outlet } from "react-router";

function App() {
  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(setIsLoggedIn({ userData }));
        } else {
          dispatch(setIsLoggedOff());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // return <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
  //     Loading...
  //   </div>

  return !loading ? (
    
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
   
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      Loading...
    </div>
  );
}

export default App;
