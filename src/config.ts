import HipHop_Poster from "~/images/posters/hip-hop.webp";
import HybridTrap_Poster from "~/images/posters/hybrid-trap.webp";
import Indie_Poster from "~/images/posters/indie.webp";
import Lofi_Poster from "~/images/posters/lofi.webp";
import Pop_Poster from "~/images/posters/pop.webp";
import UKDrill_Poster from "~/images/posters/uk-drill.webp";

export const SITE = {
  name: "Fatality Studios",
  description: "Music production studio.",
  url: "https://fatalitystudios.com",
  author: {
    name: "Sameer Jadav",
    url: "https://sameerjadav.me",
    twitterId: "@SameerJadav_",
  },
  links: {
    discord: "https://discord.gg/YcxzhJN6",
    github: "https://github.com/SameerJadav/fatality-studios",
  },
};

export const POSTERS = [
  { src: HipHop_Poster, alt: "Hip-Hop Poster", href: "/hiphop" },
  { src: HybridTrap_Poster, alt: "Hybrid Trap Poster", href: "/hybrid-trap" },
  { src: UKDrill_Poster, alt: "UK Drill Poster", href: "/uk-drill" },
  { src: Pop_Poster, alt: "Pop Poster", href: "/pop" },
  { src: Lofi_Poster, alt: "Lofi Poster", href: "/lofi" },
  { src: Indie_Poster, alt: "Indie Poster", href: "/indie" },
];
