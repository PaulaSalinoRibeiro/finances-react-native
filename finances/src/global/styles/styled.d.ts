import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType typeof theme

  export interface DefaultTheme extends ThemeType {}
}

// sobrescreve o tema padrão do styled component