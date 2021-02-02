import './App.css';
import React from 'react';
import Navbar from './components/Nav/Navbar';
import Header from './components/Head/Header';
import Main from './components/Main/profile/profile-component';
import Footer from './components/Footer/footer';
import { BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Main/dialogs/dialogsContainer';
import Settings from './components/Main/Settings/settings';
import Musics from './components/Main/Musics/musics';
import News from './components/Main/news/news';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
    
        <Header />
        <Navbar/>
        <div className="mainContent">
          <Route path="/profile" render={() => <Main/>} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/musics" component={Musics} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
