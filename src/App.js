import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/app_bar';
import FooterBar from './components/footer_bar';
import {Route} from 'react-router-dom';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import LearningPaths from './learning_paths/learning_paths';
import SampleMaterial from './sample_material/sample_material';
import Brochures from './brochures/brochures';
import MyVisit from './my_visit/my_visit';
import MyProposal from './my_proposal/my_proposal';
import QikCalc from './qik_calc/qik_calc';
import Articles from './articles/articles';
import Search from './search/search';
import Settings from './settings/settings';

class App extends Component {
    state={
        chipMessage: "Please login"
    }
    
    changeChipMessage = (auth) => {
        if(auth){
            this.setState({
                changeChipMessage: "Logged in"
            });    
        }
        else {
            this.setState({
                changeChipMessage: "Please login"
            }); 
        } 
        
    }
    
    render() {
        return (
            <div className="App">
                <CssBaseline />
                <NavBar />
                <Route exact path = "/" render={() => (
                    <Home chipMessage={this.state.chipMessage}/>
                )}/>
                <Route path= "/portfolio" render = {({history}) => (
                    <Portfolio />
                )}/>
                <Route path= "/learning_paths" render = {({history}) => (
                    <LearningPaths />
                )}/>
                <Route path= "/sample_material" render = {({history}) => (
                    <SampleMaterial />
                )}/>
                <Route path= "/brochures" render = {({history}) => (
                    <Brochures />
                )}/>
                <Route path= "/my_visit" render = {({history}) => (
                    <MyVisit />
                )}/>
                <Route path= "/my_proposal" render = {({history}) => (
                    <MyProposal />
                )}/>
                <Route path= "/qik_calc" render = {({history}) => (
                    <QikCalc />
                )}/>
                <Route path= "/articles" render = {({history}) => (
                    <Articles />
                )}/>
                <Route path= "/search" render = {({history}) => (
                    <Search />
                )}/>
                <Route path= "/settings" render = {({history}) => (
                    <Settings />
                )}/>
                <FooterBar />
            </div>
        );
    }
}

export default App;
