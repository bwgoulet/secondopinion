"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

export default function Session() {

    const [notes, setNotes] = useState("");
    const [audioBlob, setAudioBlob] = useState<Blob>();

    const addAudioElement = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);

        console.log(blob);
        setAudioBlob(blob)
    };

    const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const submitSession = async () => {

        let form = new FormData();

        if (!audioBlob || !id || !notes) {
            console.log(audioBlob, id, notes)
            alert('Could not submit');
            return;
        }

        form.append('transcript', audioBlob, 'transcript');
        form.append('patientId', id)
        form.append('notes', notes)

        const result = await fetch('https://5e11-152-23-112-218.ngrok-free.app/create_session', {
            method: "POST",
            body: form
        })

        if (result.status === 200) {
            alert('Success!')
        }

    }

    return (
        <div className="flex">
            <div className="h-screen py-[20px]">
                <Button
                    className="bg-transparent rounded-full p-0 h-[50px] text-gray-500"
                    onClick={() => router.push("/dashboard")}
                >
                    <Icon icon="bx:x" width="80"></Icon>
                </Button>
            </div>
            <div className="flex flex-col flex-1 h-screen p-[20px]">
                <div className="mb-5">
                    {/* Header */}
                    <p className="font-bold text-sm">Title</p>
                    <p className="text-5xl">October 25, 2023 @ 5:47 PM</p>
                </div>
                <div className="mb-5">
                    {/* Supporting Information */}
                    <p className="font-bold text-sm">Patient</p>
                    <p className="text-1xl">John Smith</p>
                </div>
                <div className="mb-5 mr-5">
                    <p className="font-bold text-sm">Session Recording</p>
                    <div>
                        <AudioRecorder
                            onRecordingComplete={(blob) => addAudioElement(blob)}
                            audioTrackConstraints={{
                                noiseSuppression: true,
                                echoCancellation: true,
                            }}
                            downloadOnSavePress={false}
                            downloadFileExtension="webm"
                            showVisualizer={true}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <p className="font-bold text-sm">Provider Notes</p>
                    <Textarea
                        labelPlacement="outside"
                        placeholder="Enter your notes"
                        className="max-w-2xl items-center"
                        value={notes}
                        onValueChange={setNotes}
                    />
                </div>

                <div className="">
                    <Button onClick={submitSession} variant="solid" className="bg-indigo-600 text-white">
                        Submit Session
                    </Button>
                </div>
            </div>
        </div>
    );
}
