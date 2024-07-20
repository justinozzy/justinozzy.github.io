import Image from "next/image";
import ThemeComponent from "@/components/ThemeComponent";

export default function Home() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ThemeComponent />
      </div>
    </div>
  );
}
