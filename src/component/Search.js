import React, { Component } from 'react';
import '../App.css';
import Loading_Gif from '../images/35.gif'
import { Link } from 'react-router-dom'

class Home extends Component {
    
    state = {
        images: []
    }
    componentDidMount() {
        let anime_search = this.props.match.params.anime_search;
        fetch("/Sear" + anime_search)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        images: result
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
        const { error, isLoaded, images } = this.state;

        console.log(images);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (<div className="Loading">
                <img src={Loading_Gif} alt="" />
                <h1>Loading.....</h1>
            </div>)
        } else {

            return (
                <div className="container mr-5 bg-grey">
                    {images.map(image => (
                        <Link to={image}>
                            <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm">
                                <img className="card-img-top img-size" src={'/' + image} alt="" />
                                <p>{image}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            );
        }
    }
}

export default Home;