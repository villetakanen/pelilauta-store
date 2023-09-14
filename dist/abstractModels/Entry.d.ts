import type { DocumentData } from "../main";
import { Storable, StorableType } from "./Storable";
export type EntryType = {
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    flowtime?: number;
    owners: string[];
} & StorableType;
export declare class Entry extends Storable implements EntryType {
    createdAt: number | undefined;
    updatedAt: number | undefined;
    flowtime: number;
    owners: string[];
    constructor(key?: string);
    /**
     * A Factory method to create an Entry from a DocumentData object
     *
     * @param {DocumentData} data The DocumentData object to create the Entry from
     * @param {string} key The key of the Entry
     */
    static fromFirestore(data: DocumentData, key?: string): Entry;
    /**
     * Returns the class in a firestore friendly JSON format
     */
    toJSON(): DocumentData;
}
