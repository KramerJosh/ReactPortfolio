// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='bg-white-color'>
      <NavTabs />
      {/* class mx-3 adds margins */}
      <main className="mx-3 bg-white-color text-primary-color"> 
        <Outlet />
      </main>
    </div>
  );
}

export default App;
