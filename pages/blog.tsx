import { Container, Heading, Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import Section from '../components/section'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NextLink from 'next/link'

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Container maxWidth='container.lg'>
      <Section delay="0.0s">
        <Heading as="h3" variant="section-title">Blog</Heading>
        {posts.map(post => (
          <Box key={post.slug} mb={6}>
            <Heading size="md">
              <ChakraLink as={NextLink} href={`/blog/${post.slug}`}>
                {post.title}
              </ChakraLink>
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={1}>{post.date}</Text>
            <Text>{post.excerpt}</Text>
          </Box>
        ))}
      </Section>
    </Container>
  )
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir)
  const posts = files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace('.md', '')
      const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(fileContent)
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { posts } }
}

export default Blog
