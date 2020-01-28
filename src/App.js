import React from 'react';
import {Route} from 'react-router-dom';
//components
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import Friends from "./components/friends/friends";

//styles
import {Wrapper, Content} from './styles/style';
import {DialogsContainer} from "./components/dialogs/dialogsContainer";
import FriendsContainer from "./components/friends/FriendsContainer";


const App = (props) => {
    return (
        <Wrapper>
            <Header />
            <Navbar />
            <Content>
                <Route path='/profile' render={() => <Profile />} />
                <Route path='/messages' render={() => <DialogsContainer />} />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/Friends' render= {() => <FriendsContainer />}/>
            </Content>
        </Wrapper>

    );
}

export default App;
