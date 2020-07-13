import React, { Component } from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                "Example1",
                "example2",
                "example3"
            ]
        }
    }

    render() {
        return (

            <div className="NavBarWrapper">
                <section className="topNavigationBar">
                    <a href="/"><img src={require("./logo.png")} alt="logo" /></a>
                    <a href="#home" className="active">HOME</a>
                    <a href="#news">ONGOING</a>
                    <a href="#contact">GENRE</a>
                    <a href="#about">RANDOM</a>
                </section>
                <SearchBar></SearchBar>
            </div>
        )
    }
}
