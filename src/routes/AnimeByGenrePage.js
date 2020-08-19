import React, { Component } from 'react';
import axios from 'axios';
import AnimePreviewCard from '../components/AnimePreviewCard/AnimePreviewCard';
import '../components/Styles/AnimeByGenrePage.css';
export default class AnimeByGenrePage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.checkAnimes = this.checkAnimes.bind(this);
        this.checkGenres = this.checkGenres.bind(this);

        this.state = {
            fullAnimeList: [],
            selectedGenres: [],
            selectedAnimes: [],
            isRomanceOn: false,
            isHaremOn: false,
            isActionOn: false,
            isShounenOn: false,
            isComedyOn: false,
            isDramaOn: false,
            isSuspenseOn: false,
            isEcchiOn: false,
            isHorrorOn: false,
            isIsekaiOn: false,
            isMysteryOn: false,
            isSchoolOn: false,

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/animes/')//where genre is equal to the radial buttons
            .then(res => {
                const animes = res.data;
                this.setState({ fullAnimeList: animes, selectedAnimes: animes });
            })
    }

    handleChange(e) {
        e.preventDefault();

    }

    checkAnimes(targetAnime) {
        let found = false
        for (let i = 0; i < this.state.selectedAnimes.length; i++) {
            if (this.state.selectedAnimes[i].animeNameENG === targetAnime) {
                return true;
            }
        }
        return found;
    }

    checkGenres(targetGenre) {
        let found = false;
        for (let i = 0; i < this.state.selectedGenres.length; i++) {
            if (this.state.selectedGenres[i] === targetGenre) {
                return true;
            }
        }
        return found;
    }

    handleClick(e) {
        let animesToSearch = [];


        if (e.target.checked) {
            if (!this.checkGenres(e.target.value)) {
                this.state.selectedGenres.push(e.target.value);
            }
            animesToSearch = this.state.selectedAnimes;
        }
        else {
            this.state.selectedGenres.splice(this.state.selectedGenres.indexOf(e.target.value), 1);
            animesToSearch = this.state.fullAnimeList;
        }

        if (this.state.selectedGenres.length === 0) {
            this.setState({ selectedAnimes: this.state.fullAnimeList });
        }
        else {
            this.state.selectedGenres.forEach(selectedGenre => {
                let matchingAnimes = [];

                animesToSearch.forEach(anime => {
                    anime.genre.forEach(genre => {
                        if (genre.toLowerCase() === selectedGenre.toLowerCase()) {
                            let found = false;
                            for (let i = 0; i < matchingAnimes.length; i++) {
                                if (matchingAnimes[i].animeNameENG === anime.animeNameENG) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) { matchingAnimes.push(anime); console.log("anime was pushed") }

                        }
                    })

                })
                this.setState({ selectedAnimes: matchingAnimes });
            })
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="GenreWrapper">
                    <form className="GenreOptions">
                        <div>
                            <button>^</button>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="romance" value="romance" defaultChecked={this.state.isRomanceOn} onChange={this.handleClick} />Romance</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="harem" value="harem" defaultChecked={this.state.isHaremOn} onChange={this.handleClick} />Harem</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="action" value="action" defaultChecked={this.state.isActionOn} onChange={this.handleClick} />Action</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="shounen" value="shounen" defaultChecked={this.state.isShounenOn} onChange={this.handleClick} />Shounen</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="comedy" value="comedy" defaultChecked={this.state.isComedyOn} onChange={this.handleClick} />Comedy</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="drama" value="drama" defaultChecked={this.state.isDramaOn} onChange={this.handleClick} />Drama</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="suspense" value="suspense" defaultChecked={this.state.isSuspenseOn} onChange={this.handleClick} />Suspense</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="ecchi" value="ecchi" defaultChecked={this.state.isEcchiOn} onChange={this.handleClick} />Ecchi</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="horror" value="horror" defaultChecked={this.state.isHorrorOn} onChange={this.handleClick} />Horror</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="isekai" value="isekai" defaultChecked={this.state.isIsekaiOn} onChange={this.handleClick} />Isekai</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="mystery" value="mystery" defaultChecked={this.state.isMysteryOn} onChange={this.handleClick} />Mystery</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="school" value="school" defaultChecked={this.state.isSchoolOn} onChange={this.handleClick} />School</label>
                        </div>
                    </form>
                    {this.state.selectedAnimes.map((anime) => (
                        <div className="entry" key={anime._id}>
                            <AnimePreviewCard name={anime.animeNameENG} animeImg={anime.imgUrl}></AnimePreviewCard>
                        </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}
