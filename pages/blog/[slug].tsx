import { Container, Heading, Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import Section from '../../components/section'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import NextLink from 'next/link'

type FrontMatter = {
  title: string
  date: string
  excerpt: string
}

const components = {
  h1: (props: any) => <Heading as="h1" size="xl" mt={6} mb={4} {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" mt={5} mb={3} {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" mt={4} mb={2} {...props} />,
  p: (props: any) => <Text mb={3} lineHeight="tall" {...props} />,
  a: (props: any) => <ChakraLink color="steelBlue" {...props} />,
  ul: (props: any) => <Box as="ul" mb={3} pl={6} {...props} />,
  ol: (props: any) => <Box as="ol" mb={3} pl={6} {...props} />,
  li: (props: any) => <Box as="li" mb={1} {...props} />,
  code: (props: any) => (
    <Box as="code" fontSize="sm" px={1} borderRadius="sm" bg="gray.100" _dark={{ bg: 'gray.700' }} {...props} />
  ),
  pre: (props: any) => (
    <Box as="pre" p={4} borderRadius="md" bg="gray.100" _dark={{ bg: 'gray.800' }} overflowX="auto" mb={4} fontSize="sm" {...props} />
  ),
  hr: () => <Box as="hr" my={6} borderColor="gray.300" _dark={{ borderColor: 'gray.600' }} />,
}

const BlogPost = ({ source, frontMatter }: { source: MDXRemoteSerializeResult; frontMatter: FrontMatter }) => {
  return (
    <Container maxWidth='container.lg'>
      <Section delay="0.0s">
        <NextLink href="/" passHref legacyBehavior>
          <ChakraLink mb={4} display="inline-block">&larr; Back to home</ChakraLink>
        </NextLink>
        <Heading as="h1" size="2xl" variant="page-title">{frontMatter.title}</Heading>
        <Text fontSize="sm" color="gray.500" mb={6}>{frontMatter.date}</Text>
        <Box>
          <MDXRemote {...source} components={components} />
        </Box>
      </Section>
    </Container>
  )
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir)
  const paths = files
    .filter(f => f.endsWith('.md'))
    .map(filename => ({
      params: { slug: filename.replace('.md', '') }
    }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content)

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title,
        date: new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        excerpt: data.excerpt,
      }
    }
  }
}

export default BlogPost
