
export interface IFileTree {
  id: string;
  fileName: string;
  isFolder: boolean;
  children?: IFileTree[];
  content?: string;
}