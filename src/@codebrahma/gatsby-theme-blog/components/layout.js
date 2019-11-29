/** @jsx jsx */
import { jsx } from 'theme-ui'
//TODO are absolute paths cleaner?
import { Box } from '@theme-ui/components'
import { ThemeProvider } from 'theme-ui'
import { Container } from '@theme-ui/components';
import theme from '../../../theme'
import Header from '../../../components/header'
import './layout.css'
//TODO figure out the right way to have the theme specification take care of the bodys font too
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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