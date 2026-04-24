import type { Metadata } from "next";
import TradeClient from "./TradeClient";

export const metadata: Metadata = {
  title: "Trade — Direct-to-Factory Sourcing Across Asia",
  description:
    "100B Trade organizes direct-sourcing delegations and maintains the vetted trade network for builders serious about controlling material costs across the Vietnam–US corridor.",
  alternates: { canonical: "/trade" },
};

export default function TradePage() {
  return <TradeClient />;
}
