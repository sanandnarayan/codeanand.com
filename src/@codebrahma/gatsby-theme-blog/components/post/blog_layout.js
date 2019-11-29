/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Heading, Box, } from '@theme-ui/components';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { Sidebar } from '@codebrahma/gatsby-theme-blog/src/components/post/sidebar'

export const BlogLayout = props => {
  const { title, body, category, author, tags } = props;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Flex sx={{flexWrap:'wrap'}}>
        <Box 
          sx={{
            width:['100%', '66%']
          }}>
          <Box mb={[1,1]}>
            <Heading as='h1'>{title}</Heading>
          </Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box marginTop={[1, 5]} sx={{
            width:['100%', '33%']
          }}>
          <Sidebar author={author} category={category} tags={tags} />
        </Box>
      </Flex>
    </Layout>
  );
};