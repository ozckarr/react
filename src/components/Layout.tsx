import React, { Component, CSSProperties } from 'react';
import Navbar from './navbar';
import ViewContainer from './viewContainer/viewContainer';
import { fullScreen } from '../css';

interface Props {}

interface State {
    currentView: string
}

/** React class component */
export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Navbar/>
                <ViewContainer/>
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
