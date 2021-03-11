import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {
    onDrop: (file: any) => void;
}

function DropZone(props: Props) {
    const onDrop = useCallback(acceptedFiles => {
        props.onDrop(acceptedFiles)
    }, [props])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' })

    return (
        <div className="bg-gray-200 p-8 border border-dashed border-black w-50 h-50 mb-6 text-center text-gray-500 cursor-pointer" 
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default DropZone;