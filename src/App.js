import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/style.css'; 
import schoolImage from './images/schl1.jpg';
import learningImage from './images/post1.jpeg';
import teacherImage from './images/teach1.jpg';

function ContactPage() {
  return (
    <div>
      <h2>Контакти</h2>
      <p>Email: info@quelisa-school.com</p>
      <p>Телефон: +380665359923</p>
      <p>Адреса: вул. Шкільна, 123, м. Черкаси</p>
    </div>
  );
}

function App() {
  const [navHovered, setNavHovered] = useState(false);

  const handleNavHover = () => {
    setNavHovered(!navHovered);
  };

  return (
    <Router>
      <div>
        <header>
          <h1>Ласкаво просимо до англійської школи "Quelisa"</h1>
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/" className={`${navHovered ? 'hovered' : ''}`}>
                Home
              </Link>
            </li>
            <li>
            <Link to="/" className={`${navHovered ? 'hovered' : ''}`}>
                About
              </Link>
            </li>
            <li>
            <Link to="/" className={`${navHovered ? 'hovered' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onMouseEnter={handleNavHover} onMouseLeave={handleNavHover}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/about">
              {/* Ваш вміст для сторінки "About" */}
            </Route>
            <Route path="/services">
              {/* Ваш вміст для сторінки "Services" */}
            </Route>
            <Route path="/contact" element={    
            <main>
            <h2>Зв'яжіться з нами</h2>
            <p>Ми будемо раді відповісти на ваші питання. Зв'яжіться з нами за допомогою нижче вказаних контактів:</p>
           </main>}     />
           <Route path="/" element={
  <main>
    <div className="school-info">
      <strong className="school-name">АНГЛІЙСЬКА ШКОЛА "QUELISA"</strong>
      <p className="school-description">
        Ласкаво просимо до англійської школи "Quelisa". Ми пропонуємо високоякісні навчальні
        програми для учнів різних вікових груп та рівнів вивчення англійської мови.
      </p>
      <img src={schoolImage} alt="School" />
    </div>

    <h2>Наші послуги</h2>
    <p>
      В нашій школі ви знайдете різноманітні курси, спрямовані на покращення навичок читання,
      письма, вивчення граматики та покращення навичок спілкування англійською мовою.
    </p>
    <img src={learningImage} alt="Learning Image" />

    <h2>Наші вчителі</h2>
    <p>
      Наші кваліфіковані та досвідчені вчителі зроблять ваш процес вивчення англійської мови
      цікавим та ефективним. Вони стежать за вашим прогресом і створюють дружню та мотивуючу
      атмосферу в класі.
    </p>
    <img src={teacherImage} alt="Teacher Image" />
  </main>
} />

          </Routes>
        </main>

        <footer>
          
          <div className="school-info">
            <strong className="school-name">АНГЛІЙСЬКА ШКОЛА "QUELISA"</strong>
            <p className="school-description">
              Школи "Quelisa" можуть відповідати різним віковим групам та рівням вивчення
              англійської мови. Наші курси розроблені для покращення навичок читання, письма,
              слухання та говоріння.
            </p>
          </div>

          <div className="contact-info">
            <h3>Контакти</h3>
            <p>Email: info@quelisa-school.com</p>
            <p>Телефон: +380665359923</p>
            <p>Адреса: вул. Шкільна, 123, м. Черкаси</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
