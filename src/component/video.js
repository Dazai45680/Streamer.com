import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';


class video extends Component {
    state = {
        video_link: null,
        video_info: null
    }
    componentDidMount() {
        let anime_name = this.props.match.params.anime_name;
        fetch("/videos/" + anime_name)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        video_link: result
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
        fetch("/info/" + anime_name)
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
        return (
            <div className='video_image'>

                <div className="mr-8 yellow">
                    <p className="anime-P">
                        {anime}</p></div>
                <div className="container navbar-dark bg-dark  shadow-sm">
                    <div className='player row'>
                        <div className="col-lg-12 video">
                            <video
                                ref={node => (this.video = node)}
                                onClick={this.handleTogglePlay}
                                onTimeUpdate={this.handleProgress}
                                onDoubleClick={this.handleFullscreen}
                                controls
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default video;
