import React, { Component } from 'react'
import AnimeInfo from '../components/AnimeInfo/AnimeInfo';
import "../components/Styles/SearchBar.css";
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.searchAnime = this.searchAnime.bind(this);
        this.randomAnime = this.randomAnime.bind(this);

        this.state = {
            targetAnime: "",
            fullAnimeList: [],
        }
    }
    randomAnime(e){
        e.preventDefault();
        this.setState({targetAnime:this.state.fullAnimeList[Math.floor(Math.random()*this.state.fullAnimeList.length)]})
    }
    searchAnime(e) {
        e.preventDefault();
        const target = document.getElementById("searchAnimeInput").value.trim();
        let result;
        if (target !== "") {
            result = this.state.fullAnimeList.find((anime) => anime.animeNameENG.toLowerCase() === target.toLowerCase());

            if (result === undefined) { //Search by japanese
                result = this.state.fullAnimeList.find((anime) => anime.animeNameJP.toLowerCase() === target.toLowerCase());
            }
        }
        if (result !== undefined) {
            this.setState({ targetAnime: result });
        }
        else{
            alert("Sorry " + target + " was currently not found!")
        }


    }

    componentDidMount() {
        console.log("home mounted");
        axios.get('http://localhost:5000/api/animes/')
            .then(res => {
                const animes = res.data;
                this.setState({ fullAnimeList: animes, targetAnime: animes[Math.floor(Math.random()*animes.length)] });
            })
    }

    componentDidUpdate() {
        console.log("home was updated");
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="SearchBarWrapper">
                        <form className="form" id="searchAnime">
                            <input type="text" className="input" id="searchAnimeInput" placeholder="Search..." />
                            <button className="" onClick={this.searchAnime}>Search</button>
                            <button className="" onClick={this.randomAnime}>Random</button>
                        </form>
                    </div>
                    <AnimeInfo targetAnime={this.state.targetAnime}></AnimeInfo>
                </div>
            </React.Fragment>
        )
    }
}
