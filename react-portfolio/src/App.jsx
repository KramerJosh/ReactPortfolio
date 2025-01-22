// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='bg-white-color flex flex-col'>
      <Header />
      <main className="mx-3 bg-white-color text-primary-color min-h-"> 
        <Outlet />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
