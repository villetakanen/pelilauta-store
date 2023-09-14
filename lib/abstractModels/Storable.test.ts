import { Storable } from './Storable'
import { expect, test } from 'vitest'

test('Supports creation of an empty Storable', () => {
  const s = new Storable()
  expect(s.key).toBe('')
})