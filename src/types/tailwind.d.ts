export type Color = string | { [key: number]: string };
export type Colors = { [key: string]: Color };

declare module 'tailwindcss/colors' {
  export interface Colors {
    primary: Colors;
    dark: Colors;
  }
}

declare module 'tailwindcss/types/config' {
  export interface ThemeConfig {
    extend: {
      colors: {
        primary: Colors;
        dark: Colors;
      };
    };
  }
}