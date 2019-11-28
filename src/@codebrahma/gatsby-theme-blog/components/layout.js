/** @jsx jsx */
import { jsx } from 'theme-ui'
//TODO are absolute paths cleaner?
import { Box } from '@theme-ui/components'
import { ThemeProvider } from 'theme-ui'
import { Container } from '@theme-ui/components';
import theme from '../../../theme'
import Header from '../../../components/header'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <Box mt={[2,2]}>
          <main>{children}</main>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;