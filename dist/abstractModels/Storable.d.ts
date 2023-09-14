import type { DocumentData } from "../main";
export type StorableType = {
    key: string;
    colletionName: string;
    firestorePath: string[];
    toJSON: () => DocumentData;
};
export declare class Storable implements StorableType {
    key: string;
    constructor(key?: string);
    get colletionName(): string;
    get firestorePath(): string[];
    /**
     * Returns the class in a firestore friendly JSON format
     */
    toJSON(): DocumentData;
}
