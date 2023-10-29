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
      <div className="h-screen py-[20px]">
        <Button
          className="bg-transparent rounded-full p-0 h-[50px]"
          onClick={() => router.push("/dashboard")}
        >
          <Icon icon="bx:x" width="80"></Icon>
        </Button>
      </div>
      <div className="flex flex-col flex-1 h-screen p-[20px]">
        <div className="mb-5">
          {/* Header */}
          <p className="text-indigo-600 text-sm">Title</p>
          <p className="text-5xl">October 25, 2023 @ 5:47 PM</p>
        </div>
        <div className="mb-5">
          {/* Supporting Information */}
          <p className="text-indigo-600 text-sm">Patient</p>
          <p className="text-1xl">John Smith</p>
        </div>
        <div className="mb-5">
          <p className="text-indigo-600 text-sm">Session Recording</p>
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
          <p className="text-indigo-600 text-sm">Provider Notes</p>
          <Textarea
            labelPlacement="outside"
            placeholder="Enter your notes"
            className="max-w-3xl items-center"
          />
        </div>
        <div className="">
          <Button variant="solid" className="bg-indigo-600 text-white">
            Submit Session
          </Button>
        </div>
      </div>
    </div>
  );
}
