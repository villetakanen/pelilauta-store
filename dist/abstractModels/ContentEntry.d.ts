import type { DocumentData } from "../main";
import { Entry, EntryType } from "./Entry";
export type ContentEntryType = {
    tags?: string[];
    title: string;
    markdownContent: string;
    htmlContent: string;
    public: boolean;
} & EntryType;
/**
 * An abstract class for a all entries that contain renderable content, such as
 * - Blog posts
 * - Pages
 * - Forum posts
 */
export declare class ContentEntry extends Entry implements ContentEntryType {
    tags: string[];
    title: string;
    markdownContent: string;
    htmlContent: string;
    public: boolean;
    constructor(key?: string);
    toJSON(): DocumentData;
    private static migrateFromV1;
    /**
     * A Factory method to create an Entry from a DocumentData object
     *
     * @param {DocumentData} data The DocumentData object to create the Entry from
     * @param {string} key The key of the Entry
     */
    static fromFirestore(raw: DocumentData, key?: string): ContentEntry;
}
