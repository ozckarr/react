import React, { Component, CSSProperties } from 'react';
import { fullscreenAbsolute } from '../../../css';
import { RouteComponentProps } from 'react-router-dom';
import Modal from '../../modal';
import HeaderSection from './headerSection';
import TextSection from './textSection';
import ImageSection from './imageSection';

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
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }}/>
                <div style={{ ...content, ...fullscreenAbsolute }}>
                    
                    <div style={flexContainer}>
                        <HeaderSection view={this.view} openModal={this.openModal}/>
                        <TextSection view={this.view}/>
                        <ImageSection view={this.view}/>
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
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.7)',
    overflowY: 'auto'
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}

const flexContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
}