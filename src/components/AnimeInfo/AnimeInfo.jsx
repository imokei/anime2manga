import React, { Component } from 'react'
import './AnimeInfo.css'

export default class AnimeInfo extends Component {
    constructor(props) {
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
                            <h1 className="title">{this.props.targetAnime.animeNameENG}</h1>
                            <hr></hr>
                            <div className="secondaryInfo">
                            <div className="japName">
                                    <h2>Japanese Name: </h2>
                                    <p>{this.props.targetAnime.animeNameJP}</p>
                                </div>

                                <div className="author">
                                    <h2>Author: </h2>
                                    <p>{this.props.targetAnime.animeNameJP}</p>
                                </div>
                                <div className="season">
                                    <h2>Anime Season Released: </h2>
                                    <p>{this.props.targetAnime.animeNameJP}</p>
                                </div>
                                <div className="lastEpisode">
                                    <h2>Number of Episodes: </h2>
                                    <p>{this.props.targetAnime.numEpisodes}</p>
                                </div>
                                <div className="whereToRead">
                                    <h2>Chapter to read: </h2>
                                    <p>{this.props.targetAnime.mangaChapLeft}</p>
                                </div>
                                <div className="adaption">
                                    <h2>Adaption: </h2>
                                    <p>{this.props.targetAnime.animeNameJP}</p>
                                </div>

                            </div>
                        </div>

                        <div className="otherTitles" id="otherTitles">
                            <h1> Other Titles by This Author </h1>
                            <hr></hr>
                            <h2> Anime1 </h2>
                            <h2> Anime2 </h2>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
