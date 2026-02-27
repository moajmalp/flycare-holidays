import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export const metadata = {
    title: "Gallery | Flycare Holidays",
    description: "Explore our captured moments from trips all around the world.",
};

export default function GalleryPage() {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    let files: string[] = [];
    try {
        if (fs.existsSync(galleryDir)) {
            files = fs.readdirSync(galleryDir);
        }
    } catch (e) {
        console.error("Gallery directory not found or cannot be read", e);
    }

    const images: { src: string; alt: string; }[] = [];
    const videos: { src: string; alt: string; }[] = [];

    const isImage = (f: string) => /\.(jpe?g|png|gif|webp)$/i.test(f);
    const isVideo = (f: string) => /\.(mp4|webm|ogg|mov)$/i.test(f);

    files.forEach(file => {
        // Skip hidden files
        if (file.startsWith('.')) return;

        // Remove extension for alt text and format nicely
        const altText = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');

        if (isImage(file)) {
            images.push({ src: `/gallery/${file}`, alt: altText });
            // The Next.js public directory serves files directly
        } else if (isVideo(file)) {
            videos.push({ src: `/gallery/${file}`, alt: altText });
        }
    });

    return <GalleryClient images={images} videos={videos} />;
}
