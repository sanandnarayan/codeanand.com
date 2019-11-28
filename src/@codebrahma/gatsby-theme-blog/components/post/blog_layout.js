import React from 'react'
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
      <Flex flexWrap="wrap">
        <Box width={["100%", 2 / 3]}>
          <Box mb={[1,1]}>
            <Heading as='h1'>{title}</Heading>
          </Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box width={["100%", 1 / 3]} marginTop={[1, 5]}>
          <Sidebar author={author} category={category} tags={tags} />
        </Box>
      </Flex>
    </Layout>
  );
};