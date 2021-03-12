import React, { useState, useEffect, useRef } from 'react';
import "@tensorflow/tfjs";
import * as cocossd from '@tensorflow-models/coco-ssd';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Webcam from 'react-webcam';


const ObjectDetectionPage = () => {
    // *********** START local state ***********
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState<cocossd.ObjectDetection>();
    const videoRef = useRef<any>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // *********** END local state ***********


    // *********** START functions ***********
    const loadModel = async () => {
        setLoading(true);
        const coco = await cocossd.load();
        setModel(coco);
        setLoading(false);
    }
    
    const runModel = async () => {
        if (model && canvasRef.current && videoRef.current.state.hasUserMedia) {
            const video = videoRef.current.video;
            const predictions = await model.detect(video);
            
            // Draw canvas
            if (predictions) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                drawCanvas(predictions, ctx); 
            }
        }
    }

    const drawCanvas = (predictions: cocossd.DetectedObject[], ctx: CanvasRenderingContext2D | null) => {
        if (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            predictions.forEach(obj => {
                const text = obj['class']; 
                const [x, y, width, height] = obj['bbox']; 
    
                ctx.beginPath();
                ctx.strokeStyle = "#2fff00";
                ctx.fillStyle = "#2fff00";
                ctx.rect(x, y, width / 3, height);
                ctx.fillText(text, x, y);
                ctx.stroke();
            })
        }
    }
    // *********** END functions **************
    

    
    // *********** START useEffect **************
    useEffect(() =>  {
        loadModel();
    }, []);

    useEffect(() =>  {
        const intervalID = setInterval(() => {
            runModel();
        }, 1000);
      
        return () => {
            clearInterval(intervalID);
        };

    }, [model]);
    // *********** END useEffect **************


    // *********** START renders **************
    return (
        <div id="ObjectDetectionPage">
            <Section>
                <h1 className="text-center mb-10">Object Detection</h1>
                <h2 className="text-center text-bold text-tensorflow-color mb-10" >Localize and identify objects in a image/video</h2>

                <div className="flex flex-col items-center">
                    <h3 className="mb-6">This demo needs a webcam</h3>

                    <div className="relative mt-12">
                        <Webcam 
                            ref={videoRef}
                            muted={true}
                        />

                        <canvas 
                            ref={canvasRef}
                            className="absolute top-0 w-full h-full"
                        />
                    </div>
                </div>

        
            </Section>
        
            <Loader loading={loading}/>
        </div>
    )
}

export default ObjectDetectionPage;