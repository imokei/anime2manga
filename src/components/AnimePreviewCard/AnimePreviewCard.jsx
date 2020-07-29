import React, { Component } from 'react'
import '../AnimePreviewCard/AnimePreviewCard.css';
export default class AnimePreviewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetAnime: "",
            fullAnimeList: [],
            currentIndex: 0,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="aniCard">
                    <img src={this.props.animeImg} alt="img"></img>
                    <div className="info">
                        <h1>{this.props.name}</h1>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
