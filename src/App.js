import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AppRouter from './AppRouter/AppRouter';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <AppRouter/>
   </BrowserRouter>
  </div>
  );
}

export default App;
