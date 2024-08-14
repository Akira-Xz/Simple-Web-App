import React from 'react'
import ReactDOM from 'react-dom/client'
// import { I18nextProvider } from 'react-i18next';
// import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import enTranslation from './assets/locale/en.json';
// import esTranslation from './assets/locale/es.json';
import { Provider } from 'react-redux'
import { store } from './assets/global/redux/store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import LayoutTest from './assets/layout/layoutTest';
// import Navbar from './assets/components/Navbar'
// import Footer from './assets/components/Footer'
// import Dashboard from './assets/components/Dashboard'
// import MenuExpand from './assets/components/MenuExpand'
// import IconSearching from './assets/components/IconSearching'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>,
// )

// i18n
//   .use(LanguageDetector)
//   .init({
//     resources: {
//       en: {
//         translation: enTranslation,
//       },
//       es: {
//         translation: esTranslation,
//       },
//     },
//     fallbackLng: 'en', // Idioma por defecto
//     debug: true, // Activa los mensajes de depuración
//     interpolation: {
//       escapeValue: false, // No necesitas escapar los valores
//     },
//     detection: {
//       order: ['querystring'],
//       lookupQuerystring: 'lang',
//       caches: ['localStorage'],
//     },
//   });

document.querySelector('#Main') && ReactDOM.createRoot(document.querySelector('#Main')).render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> */}
      <Provider store={store}>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/*" element={<LayoutTest />} />
            {/* <Route path="/*" element={<div className='h-screen w-full flex flex-col gap-y-[20px] justify-center items-center'>
            <div className='body-1 text-center text-black'>Error</div>
            <div className='title-h1-big text-center text-secondary lg:!text-[100px]'>404</div>
            <div className='body-1 text-center text-black'>Página No Encontrada</div>
          </div>} /> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      </Provider>
    {/* </I18nextProvider> */}
  </React.StrictMode>,
)
