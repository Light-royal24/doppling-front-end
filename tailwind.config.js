/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-bg": "rgba(170, 170, 170, 0.06)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [
    nextui({
      addCommonColors:true,
      themes: {
        light: {
          // ...
          colors: {
            secondary:{
              DEFAULT:"#9353D3",
              foreground:"#fff"
            },
            custom_white:{
              DEFAULT:'#fff',
              foreground:'#fff'
            },
            
          },
        },
        dark: {
          // ...
          colors: {
            secondary:{
              // DEFAULT:"#9353D3",
              // foreground:"fff"
            },
          },
        },
        // ... custom themes
        mytheme: {
          // custom theme
          extend: "light",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "white",
            },
           
            orange: "orangered",
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
