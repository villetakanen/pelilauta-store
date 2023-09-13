import { DocumentData } from "./DocumentData"

export type EntryType = {
  key: string
  createdAt?: number|undefined
  updatedAt?: number|undefined
  flowtime?: number
  colletionName: string
  firestorePath: string[]
  toJSON: () => DocumentData
}

export class Entry implements EntryType {
  key = ''
  createdAt:number|undefined = undefined
  updatedAt:number|undefined = undefined
  flowtime = -1

  constructor(key?: string) {
    if (key) this.key = key
  }

  get colletionName(): string {
    throw new Error('Not implemented')
  }

  get firestorePath(): string[] {
    throw new Error('Not implemented')
  }

  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  public static fromFirestore(data: DocumentData, key?: string): Entry {
    const e = new Entry(key)
 
    // if key is not set, but it is in data, set it
    if (!e.key && data.key) e.key = data.key as string

    // set createdAt to undefined if it is not a number
    e.createdAt = data.createdAt && typeof data.createdAt === 'number' ? data.createdAt : undefined

    // set updatedAt to undefined if it is not a number
    e.updatedAt = data.updatedAt && typeof data.updatedAt === 'number' ? data.updatedAt : undefined

    // set flowtime to -1 if it is not a number
    e.flowtime = data.flowtime && typeof data.flowtime === 'number' ? data.flowtime : -1

    return e
  }

  /**
   * Returns the class in a firestore friendly JSON format
   */
  public toJSON(): DocumentData {
    const data = {
      key: this.key,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      flowtime: this.flowtime
    }
    return data
  }
}