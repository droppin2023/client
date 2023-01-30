import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react'
import { BaseLayout } from '@components/layout/BaseLayout'
import { HotToastConfig } from '@components/layout/HotToastConfig'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { env } from '@shared/environment'
import { chains, wagmiClient } from '@shared/wagmiClient'
import GlobalStyles from '@styles/GlobalStyles'
import { StepsTheme as Steps } from 'chakra-ui-steps'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { WagmiConfig } from 'wagmi'

import Footer from '@components/shared/Footer'
import Navbar from '@components/shared/Navbar'
import { UserProvider } from '@context/UserContext'

// Router Loading Animation with @tanem/react-nprogress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const chakraTheme = extendTheme({
    components: {
      Steps,
    },
  })

  return (
    <>
      {/* TODO SEO */}
      <DefaultSeo
        dangerouslySetAllPagesToNoFollow={!env.isProduction}
        dangerouslySetAllPagesToNoIndex={!env.isProduction}
        defaultTitle="Droppin" // TODO
        titleTemplate="%s | Droppin" // TODO
        description="EVM-based Smart Contract & DApp Development Boilerplate" // TODO
        openGraph={{
          type: 'website',
          locale: 'en',
          url: env.url,
          site_name: 'Droppin', // TODO
          images: [
            {
              url: `${env.url}/images/cover.jpg`, // TODO
              width: 1200,
              height: 670,
            },
          ],
        }}
        twitter={{
          handle: '@scio_xyz', // TODO
        }}
      />

      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CacheProvider value={cache}>
        <ChakraProvider theme={chakraTheme}>
          <DarkMode>
            <GlobalStyles />

            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains} theme={darkTheme()}>
                <BaseLayout>
                  <UserProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                  </UserProvider>
                </BaseLayout>
              </RainbowKitProvider>
            </WagmiConfig>

            <HotToastConfig />
          </DarkMode>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
