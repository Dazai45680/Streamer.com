import React, { Component } from 'react';
import '../App.css';
import Loading_Gif from '../images/35.gif'

import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        Links: []
    }
    componentDidMount() {
        let anime_info = this.props.match.params.anime_info;
        fetch("/info" + anime_info)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Links: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render() {
        let anime_info = this.props.match.params.anime_info;
        const { error, isLoaded, Links } = this.state;
        let image = Links[1];
        console.log(image);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (<div className="Loading">
                <img src={Loading_Gif} alt="" />
                <h1>Rising flare</h1>
            </div>)
        } else {

            return (
                <div className="video_image">
                    <div className="container yellow">
                        <p className="anime-P">{"anime info"}</p>

                    </div>
                    <div className="container navbar-dark bg-dark  shadow-sm">
                        <div className="flex">
                            <img className="info_image" src={'/' + image} alt="" />
                            <p className="info_name">{anime_info}</p>
                        </div>
                        <div className="anime_Links">
                            {Links.map(Linkzz => (

                                <Link exact to={'../video/' + Linkzz}>
                                    <p>{Linkzz}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            );
        }
    }
}

export default Home;