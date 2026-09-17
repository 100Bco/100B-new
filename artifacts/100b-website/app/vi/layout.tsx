import { SetLang } from "@/components/SetLang";

export default function ViLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetLang locale="vi" />
      {children}
    </>
  );
}
