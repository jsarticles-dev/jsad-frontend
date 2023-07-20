export const ToolbarOptions: ToolbarOptionsType[] = [
  ["bold", "italic", "underline", "strike"], // text formatting options
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // header options
  [{ list: "ordered" }, { list: "bullet" }], // list options
  ["link", "image", "video"], // additional options like links, images, and videos
  ["clean"], // remove formatting option
];

type ToolbarOptionsType =
  | string
  | { [key: string]: any }
  | Array<string | { [key: string]: any }>;
