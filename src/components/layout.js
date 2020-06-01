/** @jsx jsx */
import { jsx } from 'theme-ui'
//TODO are absolute paths cleaner?
import { Box } from '@theme-ui/components'
import { ThemeProvider } from 'theme-ui'
import { Container } from '@theme-ui/components';
import Helmet from 'react-helmet'
import theme from '../../src/theme'
import Header from './header'
import favicon from '../images/favicon.ico'
import './layout.css'
//TODO figure out the right way to have the theme specification take care of the bodys font too
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div
        sx={{
          fontFamily: 'body',
          bg: 'background',
          minHeight: '100vh',
        }}>
        <Container px={1}>
          <Header/>
          <Box mt={[2,2]}>
            <main>{children}</main>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Layout;