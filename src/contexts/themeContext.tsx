import React from "react";


// Ett interface som beskriver vilka färgpaletter som ska finnas
interface Themes {
    light: ThemePalette
    dark: ThemePalette
}

// Ett interface som beskriver hur en färgpalett ser ut
export interface ThemePalette {
    foreground: {
        primary: string,
        secondary: string,
        darkened: string
    },
    background: {
        primary: string,
        secondary: string,
    },
}

// Våra färgpaletter för de olika teman
const themes: Themes = {
    light: {
        foreground: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
            darkened: '#000000'
        },
        background: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
        },
    },
    dark: {
        foreground: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
            darkened: '#707070'
        },
        background: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
        },
    },
}

// Här skapar vi react kontexten med default värden
// (default värdena används inte om vi har ThemeContext.Provider i vårt träd)
export const ThemeContext = React.createContext<State>({
    theme: themes.dark,
    toggleTheme: () => {}
})

//------  OVAN ÄR VÅR CONTEXT INKLUSIVE FÄRGPALETTERNA  -----//




//------  NEDAN ÄR VÅR PROVIDER COMPONENT  -----//

interface Props {}
interface State {
    theme: ThemePalette,
    toggleTheme: () => void
}

export class ThemeProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        }
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === themes.light ? themes.dark : themes.light
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}