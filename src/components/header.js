/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      display: "flex",
      alignItems: "center",
      variant: "styles.header",
    }}
  >
    <Link
      to="/"
      sx={{
        fontSize: 3,
        variant: "styles.navlink",
      }}
    >
      codeanand
    </Link>
    <div sx={{ mx: "auto" }} />
    <Link
      to="/blog"
      sx={{
        variant: "styles.navlink",
        p: 1,
      }}
    >
      Blog
    </Link>
    <Link
      to="https://twitter.com/codeanand"
      target="_blank"
      sx={{
        variant: "styles.navlink",
        p: 1,
      }}
    >
      Twitter
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
