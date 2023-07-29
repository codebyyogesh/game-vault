import {extendTheme,ThemeConfig, Theme } from "@chakra-ui/react";


/*  Add your color mode config */
const config: ThemeConfig = {
  initialColorMode: 'dark',
 }

 // extend the theme
const theme = extendTheme({ config })

export default theme
