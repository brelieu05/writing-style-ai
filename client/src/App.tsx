import { useState } from 'react'
import './App.css'
import { Box, FileUpload, Icon } from "@chakra-ui/react"
import { Upload } from 'lucide-react'


const Demo = () => {
  return (
    <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon size="md" color="fg.muted">
          <Upload />
        </Icon> 
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">.png, .jpg up to 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-black">Hello World</h1> */}
      <Demo />
    </>
  )
}

export default App
