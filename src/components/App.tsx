import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './spinner';
import ErrorBoundary from './errorBoundary';
import { WelcomeScreen } from './welcomeScreen';
import { Monkey } from './monkey';
import { ThemeProvider } from '../contexts/themeContext';

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
        isWelcomeScreenEnabled: false
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
                    <ThemeProvider>
                        <ErrorBoundary>
                            {this.WelcomeScreen}
                            <Suspense fallback={<Monkey/>}>
                                <Layout/>
                            </Suspense>
                        </ErrorBoundary>
                    </ThemeProvider>
                </Router>
            </Suspense>
        )
    }
}