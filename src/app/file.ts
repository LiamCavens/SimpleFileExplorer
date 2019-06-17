export interface File {
    name: string;
    type: string;
    added?: string;
    files?: File[]
}
