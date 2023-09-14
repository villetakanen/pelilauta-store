import type { DocumentData } from "../main";
import { Storable, StorableType } from "./Storable"

export type EntryType = {
  createdAt?: number|undefined
  updatedAt?: number|undefined
  flowtime?: number
  owners: string[]
} & StorableType

export class Entry extends Storable implements EntryType {
  
  createdAt:number|undefined = undefined
  updatedAt:number|undefined = undefined
  flowtime = -1
  owners: string[] = []

  constructor(key?: string) {
    super(key)
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

    // set owners to [owner] if it is a string
    if (data.owners && typeof data.owners === 'string') e.owners = [data.owners]
    // else, if it's an array, set owners to it
    else if (data.owners && Array.isArray(data.owners)) e.owners = data.owners as string[]
    // else, set owners to []
    else e.owners = []

    return e
  }

  /**
   * Returns the class in a firestore friendly JSON format
   */
  public toJSON(): DocumentData {
    const data = super.toJSON()

    // if createdAt is set, add it to the data
    if (this.createdAt) data.createdAt = this.createdAt

    // if updatedAt is set, add it to the data
    if (this.updatedAt) data.updatedAt = this.updatedAt

    // if flowtime is set, add it to the data
    if (this.flowtime) data.flowtime = this.flowtime

    return data
  }
}