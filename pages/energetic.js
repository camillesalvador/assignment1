import Layout from '../components/PageLayout'

const style = {
  container: {
    margin: '0 auto',
    marginTop: '50px',
    padding: '50px 60px',
    maxWidth: '800px',
    backgroundColor: 'rgba(102, 185, 191, 0.5)',
    color: 'rgba(55, 55, 55, 0.5)',
    boxShadow: '1px 2px 10px lightgrey'
  },
  title: {
    fontFamily: '"Alfa Slab One", cursive',
    textTransform: 'uppercase',
    fontSize: '48px',
    fontWeight: 'lighter'
  },
  sub: {
    fontFamily: '"Gentium Slab One", serif',
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  para: {
    fontFamily: '"Gentium Slab One", serif',
    fontSize: '18px',
    lineHeight: '1.5'
  }
}

export default () => (
  <Layout>

    <div style={style.container}>
      <h1 style={style.title}>Energetic Page</h1>
      <h2 style={style.sub}>Color Strategy: Material Design</h2>

      <p style={style.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia d
          eserunt mollit anim id est laborum.
      </p>
    </div>

    <style jsx global>{`
      body {
        background-color: #fff;
      }
      nav {
        background-color: #fff;
        border-bottom: 1px solid #f4f4f4;
      }
      a {
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        color: #373737;
        opacity: 0.5;
      }
      a:hover {
        opacity: 0.8;
      }
    `}</style>
  </Layout>
)
