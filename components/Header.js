import Link from 'next/link'

const style = {
  navbox: {
    display: 'flex',
    justifyContent: 'center',
  },
  navlinks: {
    textDecoration: 'none',
    textAlign: 'center',
    margin: '20px',
    textTransform: 'uppercase',
  }
}

const Header = () => (
  <nav style={style.navbox}>
    <Link href={{pathname: '/'}} prefetch>
      <a style={style.navlinks}>Sophisticated</a>
    </Link>
    <Link href={{pathname: '/energetic'}} prefetch>
      <a style={style.navlinks}>Energetic</a>
    </Link>
    <Link href={{pathname: '/fun'}} prefetch>
      <a style={style.navlinks}>Fun</a>
    </Link>
    <Link href={{pathname: '/corporate'}} prefetch>
      <a style={style.navlinks}>Corporate</a>
    </Link>
    <Link href={{pathname: '/relaxed'}} prefetch>
      <a style={style.navlinks}>Relaxed</a>
    </Link>
  </nav>
)

export default Header