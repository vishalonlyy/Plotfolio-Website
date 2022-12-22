import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import * as React from "react";
import { theme as chakraTheme } from "@chakra-ui/pro-theme";
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,

}
    
const theme = extendTheme(
    {
        config
    },
    {
      colors: { 
        ...chakraTheme.colors,
        brand: chakraTheme.colors.blue 
      },
      styles: {
        global: (props: any) => ({
          body: {
            color: '#222222',
            bg: 'rgba(21,14,35,255)',
          },
        }),
      },
      components: {
        Button: {
          variants: {
            outline: {
              width: "140px",
              borderColor: "#2962FF",
              color: "#2962FF",
              _hover: {
                borderColor: "#0634B5",
                color: "#0634B5"
              }
            },
           
            primary:{
              width: "140px",
              bgColor: "#2962FF",
              _hover: {
                bgColor: "#0634B5",
              }
            },
           
            sm: {
              bg: 'teal.500',
              fontSize: 'md',
            },
          },
          defaultProps: {
           
            _hover: {
              color: "#0634B5",
            }
          },
        },
      },
    },
    chakraTheme
  );

export default 
  theme

