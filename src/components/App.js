import React from 'react';
import '../App.css';
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Home from './Home/Home.js'
import AboutUs from './AboutUs/AboutUs.js'
import ArtistsCardGroup from './Artists/ArtistsCardGroup.js'
import ArchiveCardGroup from './Archive/ArchiveCardGroup.js'
import Images from './Gallery/Images/Images.js'
import VideosCardGroup from './Gallery/Videos/VideosCardGroup.js'
import Contacts from './Contacts/Contacts.js'
import Error from './Error.js'
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <div id="page-container">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/artists" component={ArtistsCardGroup}/>
          <Route path="/archive" component={ArchiveCardGroup}/>
          <Route path="/images" component={Images}/>
          <Route path="/videos" component={VideosCardGroup}/>
          <Route path="/contacts" component={Contacts}/>
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App;
