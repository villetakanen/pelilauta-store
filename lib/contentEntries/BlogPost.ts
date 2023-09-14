import { ContentEntry, ContentEntryType } from "../abstractModels/ContentEntry";
import type { DocumentData } from "../main";

export type BlogPostType = {
  releaseDate: number | undefined
  blogKey: string
} & ContentEntryType

export class BlogPost extends ContentEntry implements BlogPostType {
  public releaseDate:number|undefined = undefined
  public blogKey = ''

  constructor(key?: string) {
    super(key)
  }

  public toJSON() {
    const data = super.toJSON()
    if (this.releaseDate) data.releaseDate = this.releaseDate
    if (this.blogKey) data.origin = this.blogKey
    return data
  }

  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  public static fromFirestore(raw: DocumentData, key?: string): ContentEntry {
    const bp = ContentEntry.fromFirestore(raw, key) as BlogPost
    if (raw.releaseDate) bp.releaseDate = raw.releaseDate as number
    if (raw.origin) bp.blogKey = raw.blogKey as string
    return bp
  }
}
