import { ReactFragment, useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './layout/Header';
import MyRoutes from './routes';
function App() {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <MyRoutes />
            </ThemeProvider>
        </div>
    );
}

export default App;
