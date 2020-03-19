import React, { CSSProperties, Component } from 'react';
import Axios, { AxiosResponse } from 'axios';

import Spinner from '../../spinner';

interface Props {
    view: string
}
interface State {
    images: string[],
    isLoading: boolean
}

export default class ImageSection extends Component<Props, State> {
    /** Not a good place for the key.. well.. what the heck.. - GET YOUR OWN! */
    readonly accessKey = "b916ed61a761bfb1b5aac28519371fe3ea49f198a5f3cd91fa4b53d469eff249"
    readonly imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/";

    state: State = {
        images: new Array(24).fill(""),
        isLoading: true
    }

    handleResponse(response: AxiosResponse) {
        if (response.data && response.data.results) {
            const images = response.data.results.map((img: any) => img.urls.small);
            this.setState({ images, isLoading: false });
        }
    }

    async componentDidMount() {
        try {
            const response = await Axios.get(this.imageDatabaseApiUrl, {
                params: {
                    client_id: this.accessKey,
                    query: this.props.view,
                    page: Math.round(Math.random() * 100),
                    per_page: 24,
                }
            })
            this.handleResponse(response);
        } catch(error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div style={root}>
                {this.state.images.map((src, index) =>
                    <div key={index} style={imageContainer}>
                        {src ? <img src={src} style={image}/> : <Spinner/>}
                    </div>
                )}
            </div>
        )
    }
}

const root: CSSProperties = {
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: 'rgba(0, 0, 0, 0.7)',
    boxShadow: '0 0px 80px 15px black'
}

const imageContainer: CSSProperties = {
    margin: '1em',
    flexGrow: 1,
    background: 'rgba(0, 0, 0, 0.5)',
    width: '12em',
    height: '18em'
}

const image: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}