import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextArea.css';

const RichTextarea = ({name,
  title,
  placeholder,
  handleChange,
  type,
  size,
  readOnly,
  plaintext,
  value}) => {
  return (
    <div>
      <label>
        <strong>{title}</strong>
      </label>
      <ReactQuill
        theme="snow"
        placeholder={placeholder}
        className="rulebox"
        style={{ minHeight: '200px' }}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction

            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image', 'video'],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ['clean'] // remove formatting button
          ]
        }}
        name = {name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default RichTextarea;
