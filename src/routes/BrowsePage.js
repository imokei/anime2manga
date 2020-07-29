import React, { Component } from 'react'
import axios from 'axios';
import AnimePreviewCard from '../components/AnimePreviewCard/AnimePreviewCard';
import '../components/Styles/Browse.css';
export default class BrowsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullAnimeList: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/animes/')
            .then(res => {
                const animes = res.data;
                this.setState({ fullAnimeList: animes });
            })
    }
    componentDidUpdate() {
    }

    render() {

        return (
            <React.Fragment>
                <div className="browseWrapper">
                    {this.state.fullAnimeList.map((anime) => (
                        <div className = "entry"  key = {anime._id}>
                            <AnimePreviewCard name={anime.animeNameENG} animeImg={anime.imgUrl}></AnimePreviewCard>
                        </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}
