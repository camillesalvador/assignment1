import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>Font and Color (NextJS)</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Oswald" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Prata" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Gentium+Book+Basic" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
    <style jsx global>{`
      *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

export default Layout
