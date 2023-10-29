"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { AudioRecorder } from "react-audio-voice-recorder";

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
      <div className="flex-1 flex">
        <div className="flex-1"></div>
      </div>
      <div className="flex flex-col flex-1 h-screen py-[100px] max-w-4xl">
        <div className="mb-5 w-full">
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
        </div>
        <div className="mb-4">
          <p className="font-bold text-sm">Provider Notes</p>
          <Textarea
            labelPlacement="outside"
            placeholder="Enter your notes"
            className="max-w-2xl items-center"
          />
        </div>

        <div className="flex">
          <Button variant="solid" className="bg-indigo-600 text-white">
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
