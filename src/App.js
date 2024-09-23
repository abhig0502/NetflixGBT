import BaseHeader from './components/BaseHeader';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginHeader from './components/LoginHeader';
import LoginPage from './components/LoginPage';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    
    
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;
