import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            second: string;
            gray: string;
            background: string;
            title: string;
        };
    }
}
