import React, { Component } from 'react'
import AnimeInfo from '../components/AnimeInfo/AnimeInfo';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.changeAnime = this.changeAnime.bind(this);

        this.state = {
            targetAnime: "",
            fullAnimeList: [],
            currentIndex: 0,
        }
    }

    changeAnime(e) {
        e.preventDefault();
        console.log(this.state);
        let index = this.state.currentIndex;
        
        index++;
        if (index >= this.state.fullAnimeList.length){
            index = 0;
        }
        this.setState({ currentIndex: index, targetAnime: this.state.fullAnimeList[index] });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/animes/')
            .then(res => {
                const animes = res.data;
                this.setState({ fullAnimeList: animes, targetAnime: animes[this.state.currentIndex] });
            })
    }

    componentDidUpdate() {
        console.log("home was updated");
        console.log("uodated stated: ", this.state);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>

                <div className="App">
                    <button onClick={this.changeAnime}>Change the Anime</button>

                    <AnimeInfo targetAnime={this.state.targetAnime}></AnimeInfo>
                </div>
            </React.Fragment>
        )
    }
}
