export interface IObject {
  [key: string]: any;
}
export interface IDaysObject {
  year: number;
  month: number;
  day: number;
}
export interface IMatchGroupObject extends IObject {
  year: string;
  month: string;
  day: string;
}

export interface IResponseObject {
  key: string;
  url: string;
}
// export interface IS3Item {
//   Key: string;
//   LastModified: string;
//   ETag: string;
//   Size: string;
//   StorageClass: string;
//   publicUrl?: string;
// }
