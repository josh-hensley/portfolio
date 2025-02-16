import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Projects, Error } from './Pages'
import { Header, Footer } from './Components'

const App: React.FC = ()=>{
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App 
