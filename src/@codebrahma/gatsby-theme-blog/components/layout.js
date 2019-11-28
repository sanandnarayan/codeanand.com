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
      <Container sx={{
        fontFamily: 'body'
      }}>
        <Header/>
        <Box mt={[2,2]}>
          <main>{children}</main>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;