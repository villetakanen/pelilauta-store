import { expect, test } from 'vitest'
import { ContentEntry } from './ContentEntry'

test('Supports creation of an empty ContentEntry', () => {
  const ce = new ContentEntry()
  expect(ce.key).toBe('')
  expect(ce.createdAt).toBe(undefined)
  expect(ce.updatedAt).toBe(undefined)
  expect(ce.flowtime).toBe(-1)
  expect(ce.tags).toEqual([])
  expect(ce.title).toBe('')
  expect(ce.markdownContent).toBe('')
  expect(ce.htmlContent).toBe('')
  expect(ce.public).toBe(true)
})

test('Supports creation of an ContentEntry from firestore', () => {
  const ce = ContentEntry.fromFirestore({
    key: 'key',
    createdAt: 1,
    updatedAt: 2,
    flowtime: 3,
    tags: ['tag1', 'tag2'],
    title: 'title',
    markdownContent: 'markdownContent',
    htmlContent: 'htmlContent',
    public: false
  })
  expect(ce.key).toBe('key')
  expect(ce.createdAt).toBe(1)
  expect(ce.updatedAt).toBe(2)
  expect(ce.flowtime).toBe(3)
  expect(ce.tags).toEqual(['tag1', 'tag2'])
  expect(ce.title).toBe('title')  
  expect(ce.markdownContent).toBe('markdownContent')
  expect(ce.htmlContent).toBe('htmlContent')
  expect(ce.public).toBe(false)

})

test('Migrates name field to use title field', () => {
  const ce = ContentEntry.fromFirestore({
    key: 'key',
    name: 'name'
  })
  expect(ce.key).toBe('key')
  expect(ce.title).toBe('name')
})