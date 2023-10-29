"use client";

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
      <div className="bg-indigo-600 h-screen p-[20px]">
        <Button onClick={() => router.push("/dashboard")}>Cancel</Button>
      </div>
      <div className="flex flex-col flex-1 h-screen bg-neutral-50 p-[20px] items-center">
        <div className="my-4">
          {/* Header */}
          <p className="text-2xl">October 25, 2023</p>
        </div>
        <div className="my-4 flex items-center">
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
          <div className="ml-4">
            <Textarea
              // label="Doctors notes"
              labelPlacement="outside"
              placeholder="Enter your notes"
              className="max-w-xs items-center"
            />
          </div>
        </div>
        <div className="my-4">
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
