import { expect, test } from 'vitest'
import { BlogPost } from './BlogPost'

test('Supports automatic firestore path generation', () => {
  const bp = new BlogPost('test')
  const path = bp.firestorePath.join('/')
  expect(path).toBe('blogPosts/test')
})