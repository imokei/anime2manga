import React, { Component } from 'react';
import AnimePreviewCard from '../components/AnimePreviewCard/AnimePreviewCard';
import axios from 'axios';
export default class OngoingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullAnimeList: [],
            currentlyAiringAnime: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/animes/')//where ongoing = true
            .then(res => {
                const animes = res.data;
                let temp = [];
                animes.forEach( anime => {
                    if(anime.ongoing === true){
                        temp.push(anime);
                    }
                })
                this.setState({ fullAnimeList: animes , currentlyAiringAnime:temp});
            })
    }
    componentDidUpdate() {


    }

    

    render() {

        return (
            <React.Fragment>
                <div className="ongoWrapper">
                    {this.state.currentlyAiringAnime.map((anime) => (
                        <div className = "entry"  key = {anime._id}>
                            <AnimePreviewCard name={anime.animeNameENG} animeImg={anime.imgUrl}></AnimePreviewCard>
                        </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}
