import MainMenu from "@/components/MainMenu";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";


export default function Home() {
  const Bg = dynamic(() => import("../components/BackgroundHO"), { ssr: false });
  return (
    <>
      <Bg></Bg>
      <Nav></Nav>
      <MainMenu></MainMenu>
    </>
  )
}
