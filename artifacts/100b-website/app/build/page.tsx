import type { Metadata } from "next";
import BuildClient from "./BuildClient";

export const metadata: Metadata = {
  title: "Build — Capital and Partnerships Across Borders",
  description:
    "100B Build is the gateway for capital seeking exposure, founders ready for institutional backing, and operators serious about building something that crosses borders.",
  alternates: { canonical: "/build" },
};

export default function BuildPage() {
  return <BuildClient />;
}
