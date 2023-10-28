'use client';

import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';


export default function Session() {



    const addAudioElement = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };

    const router = useRouter();

    return (


        <div className="flex">

            <div className="bg-blue-200 h-screen p-[20px]">
                <Button onClick={() => router.push("/dashboard")}>Cancel</Button>
            </div>
            <div className="flex flex-col flex-1 h-screen bg-green-200 p-[20px]">
                <div>
                    {/* Header */}
                    <p className="text-2xl">October 25, 2023</p>
                </div>
                <div>
                    <AudioRecorder
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                            noiseSuppression: true,
                            echoCancellation: true,
                        }}
                        downloadOnSavePress={true}
                        downloadFileExtension="webm"
                        showVisualizer={true}
                    />
                </div>
                <div>
                    <Textarea
                        label="Doctors notes"
                        labelPlacement="outside"
                        placeholder="Enter your notes"
                        className="max-w-xs"
                    />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </div>

        </div >
    )
}