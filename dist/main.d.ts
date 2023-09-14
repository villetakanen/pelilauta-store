export type DocumentData = {
    [key: string]: string | string[] | number | boolean | Date | undefined | DocumentData | DocumentData[];
};
export * from './contentEntries/BlogPost';
