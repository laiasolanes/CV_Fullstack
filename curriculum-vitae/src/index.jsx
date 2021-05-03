import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import './index.css';
import Header from './components/header/header';
import Presentation from './components/presentation/presentation';
import CallToAction from './components/callToAction/callToAction';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Footer from './components/footer/footer';
import store from './redux/store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <Presentation />
      <CallToAction />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
