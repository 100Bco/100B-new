import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "100B | Beyond Borders",
  description:
    "100B is the operating partner for serious deals between two worlds. We connect elite operators, capital, and builders across the Vietnam–US corridor — co-building global brands made in Vietnam and consumed worldwide.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
