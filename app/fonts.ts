import { Questrial } from "next/font/google";

export const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
