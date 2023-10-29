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
    const id = searchParams.get('id');
    const name = searchParams.get('name');

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
            router.push("/dashboard")
        }

    }

    const converDate = (timestamp: any) => {
        var date = new Date(timestamp);

        // Extract the date, month, and year
        var month = date.getMonth() + 1; // Months are 0-based
        var day = date.getDate();
        var year = date.getFullYear();

        // Format the date as MM/dd/yyyy
        var formattedDate = month + '/' + day + '/' + year;

        return formattedDate;

    }

    return (
        <div className="flex">
            <div className="flex-1 flex">
                <div className="flex-1"></div>
            </div>
            <div className="flex flex-col flex-1 h-screen py-[100px] max-w-4xl">
                <div className="mb-5 w-full">
                    {/* Header */}
                    <p className="font-bold text-sm">Title</p>
                    <p className="text-5xl">{name}'s Session</p>
                </div>
                <div className="mb-5">
                    {/* Supporting Information */}
                    <p className="font-bold text-sm">Date</p>
                    <p className="text-1xl">{converDate(Date.now())}</p>
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

                <div className="flex">
                    <Button onClick={submitSession} variant="solid" className="bg-indigo-600 text-white">
                        Submit Session
                    </Button>
                    <div className="w-1"></div>
                    <Button onClick={() => router.push("/dashboard")}>Cancel</Button>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
