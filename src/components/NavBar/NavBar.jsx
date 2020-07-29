import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import AnimeByGenrePage from '../../routes/AnimeByGenrePage';
import Home from '../../routes/Home';
import OngoingPage from '../../routes/OngoingPage';
import BrowsePage from '../../routes/BrowsePage';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hamToggle: false,
        }
    }


    render() {
        return (
            <Router>
                <nav>
                    <section className="NavBarWrapper">
                        <div className="topNavigationBar">
                                <Link to="/" className="nav-item"><img src={require("./logo.png")} alt="logo" /></Link>
                                <Link to="/" className="nav-item">Home</Link>
                                <Link to="/browse" className="nav-item">Browse</Link>
                                <Link to="/ongoing" className="nav-item">Users</Link>
                                <Link to="/genre" className="nav-item">Genre</Link>
                            <div className="icon">
                                <Menu right noOverlay>
                                    <Link to="/" className="bm-item">Home</Link>
                                    <Link to="/browse" className="bm-item">Browse</Link>
                                    <Link to="/ongoing" className="bm-item">Users</Link>
                                    <Link to="/genre"className="bm-item">Genre</Link>
                                </Menu>
                            </div>
                        </div>
                    </section>
                </nav>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/browse"><BrowsePage /></Route>
                    <Route path="/ongoing"><OngoingPage /></Route>
                    <Route path="/genre"><AnimeByGenrePage /></Route>
                </Switch>

            </Router>
        )
    }
}
