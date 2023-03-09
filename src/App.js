import logo from './logo.svg';
import './App.css';
import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider , QueryClient } from 'react-query';
function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className='container' >
      <RouterProvider router={router}/>
      <ToastContainer></ToastContainer>
    </div>
    </QueryClientProvider>
  );
}

export default App;
