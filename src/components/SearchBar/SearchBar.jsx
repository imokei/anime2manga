import React, { Component } from 'react'
import './SearchBar.css';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.searchAnime = this.searchAnime.bind(this);
        this.state = {
            list: [
                "Example1",
                "example2",
                "example3"
            ]
        }
    }

    searchAnime(e){
        e.preventDefault();
        let list = this.state.list;
        const target = document.getElementById("addInput");
        const form = document.getElementById("searchAnime");

        if(target !== ""){
            //do a query of the db for this anime title
            //if there is a match then change the state of the current anime to that one
            //else say sorry anime not found but stay on the current page
            list.push(target.value);

        this.setState({
            list:list
        });
        target.classList.remove("is-danger");
        form.reset();
        }else{
            target.classList.add("is-danger");
        }

    }

    render() {
        return (
            <div className = "SearchBarWrapper">
                <section className="section">
                    <form className="form" id="searchAnime">
                        <input type="text" className="input" id="searchAnimeInput" placeholder="Search..."/>
                        <button className="" onClick={this.searchAnime}>Search</button>
                    </form>
                </section>
            </div>
        )
    }
}
