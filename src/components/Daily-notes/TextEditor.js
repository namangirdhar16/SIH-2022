import React from "react";
import {useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const TextEditor = ({ onSubmit }) => {
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ body })
    }

    return (
        <>
        {/* Text Editor */}
        <form onSubmit={handleSubmit}>
            <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                
                    const data = editor.getData()
                    setBody(data)
                    console.log(data);
                }}
            />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default TextEditor;

