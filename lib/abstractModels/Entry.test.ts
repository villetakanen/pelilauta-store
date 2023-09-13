import { Entry } from './Entry'
import { expect, test } from 'vitest'

test('Supports creation of an empty Entry', () => {
  const e = new Entry()
  expect(e.key).toBe('')
  expect(e.createdAt).toBe(undefined)
  expect(e.updatedAt).toBe(undefined)
  expect(e.flowtime).toBe(-1)
})

test('Supports creation of an Entry with a key', () => {
  const e = new Entry('key')
  expect(e.key).toBe('key')
  expect(e.createdAt).toBe(undefined)
  expect(e.updatedAt).toBe(undefined)
  expect(e.flowtime).toBe(-1)
}
)

test('Supports creation of an Entry from a DocumentData object', () => {
  const e = Entry.fromFirestore({
    key: 'key',
    createdAt: 1,
    updatedAt: 2,
    flowtime: 3
  })
  expect(e.key).toBe('key')
  expect(e.createdAt).toBe(1)
  expect(e.updatedAt).toBe(2)
  expect(e.flowtime).toBe(3)
})

test('Supports creation of an Entry from a DocumentData object with a key', () => {
  const e = Entry.fromFirestore({
    key: 'key',
    createdAt: 1,
    updatedAt: 2,
    flowtime: 3
  }, 'key2')
  expect(e.key).toBe('key2')
  expect(e.createdAt).toBe(1)
  expect(e.updatedAt).toBe(2)
  expect(e.flowtime).toBe(3)
})