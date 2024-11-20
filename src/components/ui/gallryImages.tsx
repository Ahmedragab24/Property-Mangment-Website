"use client"

import { useState } from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample image data
const images = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 1", title: "Beautiful Landscape" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 2", title: "City Skyline" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 3", title: "Mountain View" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 4", title: "Serene Beach" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 5", title: "Forest Trail" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Image 6", title: "Desert Sunset" },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-2">
                  <AspectRatio ratio={3 / 2}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{image.title}</DialogTitle>
                <DialogDescription>Click outside to close</DialogDescription>
              </DialogHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}