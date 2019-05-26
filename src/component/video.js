import React, { Component } from 'react';
import '../App.css';
import Loading_Gif from '../images/3.gif'
import { Link } from 'react-router-dom'


class video extends Component {
    state = {
        video_link: null,
        video_info: null
    }
    componentDidMount() {
        let anime_name = this.props.match.params.anime_name;
        fetch("/sideos/" + anime_name)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoadede: true,
                        video_link: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoadede: true,
                        error
                    });
                }
            )
        fetch("/title/" + anime_name)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        video_info: result
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
        let video = this.state.video_link;
        let anime = this.state.video_info;
        const { error, isLoaded , isLoadede } = this.state;
        if (!isLoaded) {
            return (<div className="Loading">
            <img className = "welcome-img" src={Loading_Gif} alt="" />
            <h1 className = "welcome-text"> Rising flare</h1>
            </div>)
        } else if(!isLoadede) {

            return (
                <div className='video_image'>

                    <div className="container yellow">
                        <Link exact to={'../anime_info/' + anime}>
                            <p className="anime-P">
                                {anime}</p>
                        </Link>
                    </div>
                    <div className="container navbar-dark bg-dark  shadow-sm">
                        <div className='player row'>
                            <div className="col-lg-12 video">
                                <video controls src={video} > </video>
                                <h1 className="text-white"> be patient and have faith video link will arrive soon </h1>
                            </div>
                           
                        </div>
                    </div>
                </div>
            );
        }
        else {

            return (
                <div className='video_image'>

                    <div className="container yellow">
                        <Link exact to={'../anime_info/' + anime}>
                            <p className="anime-P">
                                {anime}</p>
                        </Link>
                    </div>
                    <div className="container navbar-dark bg-dark  shadow-sm">
                        <div className='player row'>
                            <div className="col-lg-12 video">
                                <video controls src={video} > </video>
                            </div>
                        
                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default video;
