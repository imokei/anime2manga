import React, { Component } from 'react'
import './AnimeInfo.css'

export default class AnimeInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            Anime: props.targetAnime
        }

    }



    render() {
        return (
    
            <React.Fragment>
                <div className="AnimeInfoWrapper">
                    <div className="card">

                        <div className="animeImg">
                            <img src={this.props.targetAnime.imgUrl} alt="anime" />

                        </div>
                        <div className="information">
                            <h1 id="Title">{this.props.targetAnime.animeNameENG}</h1>
                            <h2 id="lastEpisode">Number of Episodes: {this.props.targetAnime.numEpisodes}</h2>
                            <h2 id="author">Author: {this.props.targetAnime.animeNameJP}</h2>
                            <h2 id="whereToRead">Chapter to read: {this.props.targetAnime.mangaChapLeft}</h2>
                        </div>

                        <div className="otherTitles" id="otherTitles">
                            <h1> Other Animes by This Author </h1>
                            <h2> Anime1 </h2>
                            <h2> Anime2 </h2>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
