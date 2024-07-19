import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
             
          bg: '#FFFAFA',
          color: '#000000',
          backgroundSize: 'cover',
          backgroundImage: "tea23.jpg",
        
      },
      a: {
        color: '#000000',
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        color: '#000000',
      },
      h2: {
        color: '#000000',
      },
      p: {
        color: '#000000',
      },
    },
  },
});

export default theme;
