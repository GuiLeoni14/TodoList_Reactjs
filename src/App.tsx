import { ReactFragment, useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
function App() {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <h1 onClick={toggleTheme}>Mudar tema</h1>
                <h1>TESTANDO</h1>
            </ThemeProvider>
        </div>
    );
}

export default App;
