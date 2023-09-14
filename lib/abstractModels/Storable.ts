import type { DocumentData } from "../main";

export type StorableType = {
    key: string
    colletionName: string
    firestorePath: string[]
    toJSON: () => DocumentData
}

export class Storable implements StorableType {
  key = ''

  constructor(key?: string) {
    if (key) this.key = key
  }

  get colletionName(): string {
    throw new Error('A Storable object must have a collectionName')
  }

  get firestorePath(): string[] {
    throw new Error('A Storable object has to provide a firestorePath')
  }

  /**
   * Returns the class in a firestore friendly JSON format
   */
  public toJSON(): DocumentData {
    return {
      key: this.key // Note: this duplicates the key to 
    }
  }
}