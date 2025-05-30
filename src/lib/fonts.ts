import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

export const monaSans: NextFont = localFont({
  src: [
    {
      path: "../../public/fonts/Mona_Sans/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mona_Sans/MonaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mona_Sans/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});
