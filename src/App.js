import BaseHeader from "./components/BaseHeader";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginHeader from "./components/LoginHeader";
import LoginPage from "./components/LoginPage";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Error from "./components/Error";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import GptSearch from "./components/GptSearch";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/error",
      element:<Error />
    },
    {
      path:"/moviepage/:movieId",
      element:<MoviePage />
    },
    {
      path:"/movies",
      element:<Movies />
    },
    {
      path:"/tvshows",
      element:<TvShows />
    },
    {
      path:"/gptsearch",
      element:<GptSearch />
    },
    
    
  ]);

  return (
    <Provider store={Store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
