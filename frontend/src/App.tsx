import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/root.css';
import { Rotas } from './routes';

function App() {
  return (
    <>
      <ToastContainer />
      <Rotas />
    </>
  )
}

export default App
