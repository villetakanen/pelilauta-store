export type DocumentData = {
  [key: string]: string | number | boolean | Date | undefined | DocumentData | DocumentData[]
}