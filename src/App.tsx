import { ReactFragment, useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './layout/SideBar';
import MyRoutes from './routes';
import { TaskProvider } from './context/TaskContext';
function App() {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <div className="App">
            <TaskProvider>
                <ThemeProvider theme={theme}>
                    <MyRoutes />
                </ThemeProvider>
            </TaskProvider>
        </div>
    );
}

export default App;
