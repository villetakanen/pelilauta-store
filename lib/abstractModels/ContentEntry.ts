import type { DocumentData } from "../main";
import { Entry, EntryType } from "./Entry";

export type ContentEntryType = {
  tags?: string[]
  title: string
  markdownContent: string
  htmlContent: string
  public: boolean
} & EntryType

/**
 * An abstract class for a all entries that contain renderable content, such as
 * - Blog posts
 * - Pages
 * - Forum posts
 */
export class ContentEntry extends Entry implements ContentEntryType {
  // See Entry and Storable for the rest of the properties  
  tags: string[] = []
  title = ''
  markdownContent = ''
  htmlContent = ''
  public = true

  constructor(key?: string) {
    super(key)
  }

  public toJSON(): DocumentData {
    const data = super.toJSON()
    
    // if tags is set, add it to the data
    if (this.tags) data.tags = this.tags

    // if title is set, add it to the data, else set it to ''
    if (this.title) data.title = this.title
    else data.title = ''

    // if markdownContent is set, add it to the data, else set it to ''
    if (this.markdownContent) data.markdownContent = this.markdownContent
    else data.markdownContent = ''

    // if htmlContent is set, add it to the data
    if (this.htmlContent) data.htmlContent = this.htmlContent

    // if public is set, add it to the data, else set it to true
    if (typeof this.public === 'boolean') data.public = this.public
    else data.public = true

    return data
  }


  private static migrateFromV1(data: DocumentData) {
    // if there is a name property, and the title property is not set, set the title property to the name property
    if (data.name && !data.title) data.title = data.name
    return data
  }

  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  public static fromFirestore(raw: DocumentData, key?: string): ContentEntry {

    // Migration from V1
    const data = ContentEntry.migrateFromV1(raw)

    const ce = Entry.fromFirestore(data, key) as ContentEntry
    
    // set tags to [] if is not set, or is not an array
    if (!data.tags || !Array.isArray(data.tags)) ce.tags = []
    else ce.tags = data.tags as string[]

    // set title to '' if is not set, or is not a string
    if (!data.title || typeof data.title !== 'string') ce.title = ''
    else ce.title = data.title as string

    // set markdownContent to '' if is not set, or is not a string
    if (!data.markdownContent || typeof data.markdownContent !== 'string') ce.markdownContent = ''
    else ce.markdownContent = data.markdownContent as string

    // set htmlContent to '' if is not set, or is not a string
    if (!data.htmlContent || typeof data.htmlContent !== 'string') ce.htmlContent = ''
    else ce.htmlContent = data.htmlContent as string

    // set public to true if is not set, or is not a boolean
    if (typeof data.public !== 'boolean') ce.public = true
    else ce.public = data.public as boolean

    return ce
  }
}