import { useState, useEffect } from 'react';
import Section from '../../components/Section';
import "@tensorflow/tfjs";
import * as cocossd from '@tensorflow-models/coco-ssd';
import Loader from '../../components/Loader';
import DropZone from '../../components/DropZone';


const ObjectDetectionPage = () => {
    // local state
    const [loading, setLoading] = useState(false);
    const [imgUrl, setImgUrl] = useState('https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg');
    const [dropFile, setDropFile] = useState<any>()

    const loadModel = async () => {
        setLoading(true);
        const image = document.getElementById('image') as HTMLImageElement;
        const model = await cocossd.load();
        setLoading(false);

        // const predictions = await model.detect(image);
        // console.log(predictions);
    }

    const onDrop = (files: Array<any>) => {
        setImgUrl('');
        const file = {...files[0], preview: URL.createObjectURL(files[0])}
        setDropFile(file);
    }

    useEffect(() => {
        // loadModel();
    }, []);

    return (
        <div id="ObjectDetectionPage">
            <Section>
                <h1 className="text-center mb-10">Object Detection</h1>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                        
                        <h2 className="text-tensorflow-color mb-2">Paste image URL</h2>
                        <input className="border border-gray-200 px-4 py-2 rounded w-3/4 mb-6" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}
                            placeholder="https://..."
                        />

                        <h2 className="text-tensorflow-color mb-2">Or choose a file</h2>
                        <div className="mb-6">
                            <DropZone onDrop={onDrop}/>
                        </div>

                        {dropFile && <img id="dropFile" src={dropFile.preview} width="400" />}
                        {imgUrl !== '' && <img id="image" src={imgUrl} width="400" />}

                    </div>
                </div>

        
            </Section>
        
            <Loader loading={loading}/>
        </div>
    )
}

export default ObjectDetectionPage;