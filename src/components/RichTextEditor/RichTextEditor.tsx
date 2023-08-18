import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToolbarOptions } from "./Toolbar";

interface EditorInterface {
  onChange: (content: string) => void;
  content: string;
}

export default function RichTextEditor({ onChange, content }: EditorInterface) {
  return (
    <ReactQuill
      className='rich-text'
      value={content}
      onChange={onChange}
      modules={{ toolbar: ToolbarOptions }}
    />
  );
}
