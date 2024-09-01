/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6uziidjSRjj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Slider } from "@/components/ui/slider"
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from "@/components/icons.js"; // Adjust the path based on your folder structure

export default function SomeComponent() {
  return (
    <div>
      <ChevronLeftIcon className="w-6 h-6" />
      <ChevronRightIcon className="w-6 h-6" />
      <HeartIcon className="w-6 h-6" />
    </div>
  );
}

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef(null) // Ref to hold the current audio element

  const handlePlayPause = (song, audioSrc) => {
    // If there's an existing audio playing, pause it
    if (audioRef.current && audioRef.current.src !== audioSrc) {
      audioRef.current.pause()
      setIsPlaying(false)
    }

    // If the same song is clicked again, toggle play/pause
    if (currentSong === song) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } else {
      // Start the new song
      const newAudio = new Audio(audioSrc)
      audioRef.current = newAudio
      newAudio.play()
      setCurrentSong(song)
      setIsPlaying(true)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#1db954] text-white py-4 px-6 flex items-center justify-between">
        <nav className="flex items-center space-x-6">
          <Link href="#" className="font-bold text-lg" prefetch={false}>
            Spotify
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Search
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Your Library
          </Link>
        </nav>
        <div>
          <Button variant="outline" className="text-[#1db954] hover:bg-[#1ed760]">
            Sign Up
          </Button>
          <Button variant="solid" className="bg-white text-[#1db954] hover:bg-gray-200 ml-4">
            Log In
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <section className="bg-[#121212] text-white py-8 px-6">
          <h2 className="text-2xl font-bold mb-4 text-[#f1f1f1]">Home</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Song Links */}
            {/* Add more as needed */}
          </div>
        </section>
        <section className="bg-[#121212] text-white py-8 px-6">
          <h2 className="text-2xl font-bold mb-4 text-[#f1f1f1]">Playlist: Lana Del Rey</h2>
          <div className="bg-[#282828] rounded-md p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Artist</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Button variant="icon" onClick={() => handlePlayPause("Summertime Sadness", "Lana-Del-Rey-Summertime-Sadness.mp3")}>
                        {currentSong === "Summertime Sadness" && isPlaying ? (
                          <PauseIcon className="w-5 h-5" />
                        ) : (
                          <PlayIcon className="w-5 h-5" />
                        )}
                      </Button>
                      <span>Summertime Sadness</span>
                    </div>
                  </TableCell>
                  <TableCell>Lana Del Rey</TableCell>
                  <TableCell>4:20</TableCell>
                  <TableCell>
                    <Button variant="icon">
                      <HeartIcon className="w-5 h-5" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Button variant="icon" onClick={() => handlePlayPause("Say yes to heaven", "Lana-Del-Rey-Say-yes-to-Heaven.mp3")}>
                        {currentSong === "Say yes to Heaven" && isPlaying ? (
                          <PauseIcon className="w-5 h-5" />
                        ) : (
                          <PlayIcon className="w-5 h-5" />
                        )}
                      </Button>
                      <span>Say yes to Heaven</span>
                    </div>
                  </TableCell>
                  <TableCell>Lana Del Rey</TableCell>
                  <TableCell>4:46</TableCell>
                  <TableCell>
                    <Button variant="icon">
                      <HeartIcon className="w-5 h-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody> 
            </Table>
          </div>
        </section>
      </main>
      <footer className="bg-[#181818] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/placeholder.svg"
            alt="Album Cover"
            width={64}
            height={64}
            className="w-12 h-12 object-cover rounded"
            style={{ aspectRatio: "64/64", objectFit: "cover" }}
          />
          <div>
            <h3 className="font-bold">{currentSong || "No song playing"}</h3>
            <p className="text-sm text-gray-400">
              {currentSong === "Summertime Sadness" || currentSong === "Say yes to Heaven"
                ? "Lana Del Rey"
                : "Acme Artist"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="icon">
            <ShuffleIcon className="w-5 h-5" />
            <span className="sr-only">Shuffle</span>
          </Button>
          <Button variant="icon">
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="icon" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
            <span className="sr-only">Play/Pause</span>
          </Button>
          <Button variant="icon">
            <ChevronRightIcon className="w-5 h-5" />
            <span className="sr-only">Next</span>
          </Button>
          <Button variant="icon">
            <RepeatIcon className="w-5 h-5" />
            <span className="sr-only">Repeat</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Volume2Icon className="w-5 h-5" />
            <Slider defaultValue={[50]} min={0} max={100} step={1} aria-label="Volume" className="w-24" />
          </div>
        </div>
      </footer>
    </div>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

function RepeatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function ShuffleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  )
}

function Volume2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

// MusicPlayer Component
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="music-player">
      <div className="player-controls">
        <button className="icon-button">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button className="icon-button">
          <RepeatIcon className="w-6 h-6" />
        </button>
        <button className="icon-button" onClick={handlePlayPause}>
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </button>
        <button className="icon-button">
          <ShuffleIcon className="w-6 h-6" />
        </button>
        <button className="icon-button">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="volume-controls">
        <button className="icon-button">
          <Volume2Icon className="w-6 h-6" />
        </button>
      </div>
      <div className="favorite">
        <button className="icon-button">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}


