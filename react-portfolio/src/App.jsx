import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ActiveSection from './components/ActiveSection'
// use useState to determine what section we're viewing

function App() {
  const [page, setPage] = useState('About')
  
  return (
    <div>
      <Header setPage={setPage} /> 
      <ActiveSection choice={page} /> 
      <Footer />
    </div>
  );
}

//   return (
//     <>
//       <Header />
//       <ActiveSection choice={page}/>
//       <Footer />
//     </>
//   )
// }

export default App
