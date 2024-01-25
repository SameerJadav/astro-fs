import HipHop_Photo from "~/images/genre-photos/hip-hop.webp";
import HybridTrap_Photo from "~/images/genre-photos/hybrid-trap.webp";
import Indie_Photo from "~/images/genre-photos/indie.webp";
import Lofi_Photo from "~/images/genre-photos/lofi.webp";
import Pop_Photo from "~/images/genre-photos/pop.webp";
import UKDrill_Photo from "~/images/genre-photos/uk-drill.webp";
import HipHop_Poster from "~/images/posters/hip-hop.webp";
import HybridTrap_Poster from "~/images/posters/hybrid-trap.webp";
import Indie_Poster from "~/images/posters/indie.webp";
import Lofi_Poster from "~/images/posters/lofi.webp";
import Pop_Poster from "~/images/posters/pop.webp";
import UKDrill_Poster from "~/images/posters/uk-drill.webp";

export const site = {
  name: "Fatality Studios",
  description: "Music production studio.",
  url: "https://fatalitystudios.com",
  author: {
    name: "Sameer Jadav",
    url: "https://sameerjadav.me",
    twitterId: "@SameerJadav_",
  },
  links: {
    discord: "https://discord.com/invite/GQ6MUsAA",
    discordServer: "",
    github: "https://github.com/SameerJadav/fatality-studios",
  },
};

interface Genre {
  name: string;
  path: string;
  slug: string;
  track: string;
  tagline: string;
  description: string;
  posterImage: ImageMetadata;
  posterImageAltText: string;
  genreImage: ImageMetadata;
  genreImageAltText: string;
}

export const genres: Genre[] = [
  {
    name: "Hip-Hop",
    path: "/hiphop",
    slug: "hiphop",
    track: "/tracks/hiphop.mp3",
    tagline: "The odyssey of true Hip-Hop",
    description:
      "The crisp drums, remarkable melodies & heavy 808s, just right. We have poured our heart and soul into creating a sonic experience that's both captivating and distinctive.",
    posterImage: HipHop_Poster,
    posterImageAltText: "Hip-Hop Poster",
    genreImage: HipHop_Photo,
    genreImageAltText: "Hip Hop genre photo",
  },
  {
    name: "Hybrid Trap",
    path: "/hybrid",
    slug: "hybrid",
    track: "/tracks/hybridtrap.mp3",
    tagline: "An escape from reality.",
    description:
      "A place where a heart full of unsettling emotions can take a pause and experience the Super-natural. The sheer power and intensity of Hybrid Trap will rush your adrenaline levels.",
    posterImage: HybridTrap_Poster,
    posterImageAltText: "Hybrid Trap Poster",
    genreImage: HybridTrap_Photo,
    genreImageAltText: "Hybrid Trap genre photo",
  },
  {
    name: "UK Drill",
    path: "/ukdrill",
    slug: "ukdrill",
    track: "/tracks/ukdrill.mp3",
    tagline: "Straight out of the streets.",
    description:
      "Dark and menacing beats reflecting the realities of urban life. Express yourself, tell your story and let us handle the rest. We together will represent the culture of UK Drill.",
    posterImage: UKDrill_Poster,
    posterImageAltText: "UK Drill Poster",
    genreImage: UKDrill_Photo,
    genreImageAltText: "UK Drill genre photo",
  },
  {
    name: "Pop",
    path: "/pop",
    slug: "pop",
    track: "/tracks/pop.mp3",
    tagline: "Charged with the brightest sounds.",
    description:
      "Crazy crowd screams and lights all focused on you, wouldn't you love that? We would too. Here is the Pop Music production to cherish your voice and turn it into a Masterpiece.",
    posterImage: Pop_Poster,
    posterImageAltText: "Pop Poster",
    genreImage: Pop_Photo,
    genreImageAltText: "Pop genre photo",
  },
  {
    name: "Lo-Fi",
    path: "/lofi",
    slug: "lofi",
    track: "/tracks/lofi.mp3",
    tagline: "Take a pause and relax.",
    description:
      "A moment away from the chaotic life just to embrace how blissful it is to be here. The raw, unpolished and imperfect sounds will create a warm and nostalgic atmosphere for you to sit back and experience the unembraced.",
    posterImage: Lofi_Poster,
    posterImageAltText: "Lo-Fi Poster",
    genreImage: Lofi_Photo,
    genreImageAltText: "Lo-Fi genre photo",
  },
  {
    name: "Indie",
    path: "/indie",
    slug: "indie",
    track: "/tracks/indie.mp3",
    tagline: "Where a voice becomes a feeling.",
    description:
      "Soothing music and soft drums, just the perfect partner for your lovely voice. A journey about the spirit of independence and self-expression, Indie music is one of the most beautiful genres that care about nothing but good music.",
    posterImage: Indie_Poster,
    posterImageAltText: "Indie Poster",
    genreImage: Indie_Photo,
    genreImageAltText: "Indie genre photo",
  },
];
