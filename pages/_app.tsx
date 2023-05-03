import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../utils/rtl-cache'
import { NavBar } from './components/NavBar';
import {Menu} from './components/Menu'



export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <div dir="ltr">
      
      <MantineProvider
        theme={{ dir: 'ltr' }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
        <Menu/>
        <Component {...pageProps}>

          </Component>
      </MantineProvider>
    </div>
  );
}