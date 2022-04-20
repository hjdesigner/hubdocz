import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as S from './styles'

const Textarea = ({name, label, value, handleChange}) => {
  
  return (
    <S.Field>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.TextArea>
        <ReactQuill theme="snow" value={value} onChange={handleChange}/>  
      </S.TextArea>      
    </S.Field>    
  )
}

export default Textarea