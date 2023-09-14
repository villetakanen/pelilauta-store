import { ContentEntry, ContentEntryType } from "../abstractModels/ContentEntry";
import type { DocumentData } from "../main";
export type BlogPostType = {
    releaseDate: number | undefined;
    blogKey: string;
} & ContentEntryType;
export declare class BlogPost extends ContentEntry implements BlogPostType {
    releaseDate: number | undefined;
    blogKey: string;
    constructor(key?: string);
    toJSON(): DocumentData;
    /**
     * A Factory method to create an Entry from a DocumentData object
     *
     * @param {DocumentData} data The DocumentData object to create the Entry from
     * @param {string} key The key of the Entry
     */
    static fromFirestore(raw: DocumentData, key?: string): ContentEntry;
}
