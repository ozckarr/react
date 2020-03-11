import React, { Component, CSSProperties } from 'react';
import { fullscreenAbsolute, fullScreen, centeredContent } from '../../../css';
import { RouteComponentProps } from 'react-router-dom';
import Modal from '../../modal';
import ImageSection from './imageSection';
import HeaderSection from './headerSection';
import TextSection from './TextSection';
import SmallImagesSection from './smallImagesSection';
import axios from 'axios';


interface Props extends RouteComponentProps {
    id: string
}

interface State {
    isModalOpen: boolean
}

export default class DetailView extends Component<Props, State> {

    state: State = {
        isModalOpen: false
    }

    private get view() {
        return this.props.match.url.substr(1);
    }

    private get imageSrc() {
        return `../assets/${this.view}.jpg`;
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });


    
    render() {
        async function getImages() {
            try {
                const respone:any = await axios.get(`https://source.unsplash.com/1600x900/?forest`);
                console.log(respone);
            } catch (error){
                console.error(error);
            }
        }

        return (
            <div style={container}>
                <div style={{ ...content, ...fullscreenAbsolute }}>
                <HeaderSection whereAreWe={this.view}/>
                <TextSection/>
                <SmallImagesSection/>
                <ImageSection imageSrc={this.imageSrc} />
                    <div style={{ ...fullScreen, ...centeredContent }}>
                        <button onClick={this.openModal}>Open Modal</button>
                    </div>

                </div>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.view}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}

const highlighted: CSSProperties = {
    color: 'orange'
}

const content: CSSProperties = {
    zIndex: 10
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}