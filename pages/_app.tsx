import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import 'styles/globals.scss'

import Head from 'next/head'

import dynamic from 'next/dynamic'
import splitbee from '@splitbee/web'

const Navbar = dynamic(() => import('components/Layout/Navbar'))

function MyApp ({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    splitbee.init({
      token: process.env.NEXTJS_SPLITBEE_TOKEN,
      disableCookie: false,
      scriptUrl: 'https://cdn.splitbee.io/sb.js',
      apiUrl: 'https://hive.splitbee.io'
    })
  }, [])

  return (
    <div>
      <Head>
        <title>
          Student Full Stack Developer from Delhi | Krish Gupta | krshkodes
        </title>
      </Head>
      <React.Fragment>
        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    </div>
  )
}

export function reportWebVitals (metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
