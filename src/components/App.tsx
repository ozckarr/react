import React, { Suspense, Component, CSSProperties } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './spinner';
import ErrorBoundary from './errorBoundary';
import { WelcomeScreen } from './welcomeScreen';
import { centeredContent, fullScreen } from '../css';
import { Monkey } from './monkey';

const Layout = React.lazy(() => import(/* webpackChunkName: "layout" */ './layout'));

interface Props {}
interface State {
    isWelcomeScreenEnabled: boolean
}

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default class App extends Component<Props, State> {
    state: State = {
        isWelcomeScreenEnabled: true
    }

    private removeWelcomeScreen = () => {
        this.setState({ isWelcomeScreenEnabled: false });
    }

    private get WelcomeScreen() {
        if (this.state.isWelcomeScreenEnabled) {
            return <WelcomeScreen dismissed={this.removeWelcomeScreen}/>
        }
    }

    render () {
        return (
            <Suspense fallback={<Spinner/>}>
                <Router>
                    <ErrorBoundary>
                        {this.WelcomeScreen}
                        <Suspense fallback={<Monkey/>}>
                            <Layout/>
                        </Suspense>
                    </ErrorBoundary>
                </Router>
            </Suspense>
        )
    }
}