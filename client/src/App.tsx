import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Portfolio, Error } from './Pages'
import { Header, Footer } from './Components'

export default function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
