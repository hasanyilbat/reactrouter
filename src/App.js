//! yarn add react-router-dom ile react router kütüphanesi kurulur.
//? BrowserRouter kullanılan browserın bütün historysine ulaşır.
//* browserRouter ile bütün componentlerin sarmalanması gerekir. Genelde App.js te sarmalanır.
//! Route:"/contact" gibi bir path gelirse contact componentini çalıştır.
//? Routes: path'e sahip olan sayfaları sarmalar. Her sayfada bulunması gereken nav, footer gibi componentler bunun içerisinde yer almaz.
//? a link tagı yerine "Link" kullanılır. "href" yerine "to" kullanılır.
//*Navlink ise tıklanıldığından kırmız olsun, yeşil olsun gibi kullanılabilr.
//! react routerın en büyük avantajlarından birisi dynamic routingdir. Otomatik olarak program içerisinde değişen parametrelere göre oluşur. Genelde uzun karışık linkler bu şekilde oluşur.
//? kullanıcağımız yerde { BrowserRouter, Routes, Route } şeklinde hangisini kullanıyor isek import etmemiz gerekir.
//*  <Route path="instructors" element={<Instructors />} /> şeklinde routelar tanmlanır.
//! Route bulunan patlar dışında bir path'e girilmesi durumunu belirtmek için "*" kullanılır.


  

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
