import classNames from 'classnames';
import { prcTimeout } from 'precision-timeout-interval';
import { createContext, MouseEvent, useEffect, useRef, useState } from 'react';
import "./assets/static_bg.jpg";
import backgroundVideo from "./assets/videoplayback.mp4";
import Book from './Book';
import ContactCard from './ContactCard';
import CV from './CV';
import './index.css';
import Summary from './Summary';

interface BookContextType {
  activeBook: number,
  setActiveBook: Function
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

// const alignBackgroundVideo = () => {
//   document.querySelector(".background-video")?.setAttribute("style",
//     "transform: translateY(-" + document.querySelector(".background-video")?.getBoundingClientRect().top + "px)"
//   );
// }
// window.addEventListener("load", alignBackgroundVideo);
// window.addEventListener("resize", alignBackgroundVideo);

const scrollBackgroundVideo = () => {
  document.querySelector(".background-video")?.setAttribute("style",
    "transform: translateZ(-1000vh) translateY(" + window.scrollY + "px)"
  );
}
window.addEventListener("scroll", scrollBackgroundVideo);
window.addEventListener("load", () => {
  document.querySelectorAll(".book").forEach(book => book.addEventListener("click",
    () => {
      for (let i = 0; i < 3; i++) {
        prcTimeout(i*1500, () => {
          let top = document.querySelector(".active .content")?.getBoundingClientRect().top;
          if (top) {
            window.scrollBy({
              behavior: "smooth",
              top: top
            })
          }
        });
      }
      // window.setTimeout(
      //   () => document.querySelector(".active .content")?.scrollIntoView({ behavior: "smooth" }),
      //   2500
      // )
    }
  ))
});

function App() {

  const [activeBook, setActiveBook] = useState<number>(-1);
  const [staticBg, setStaticBg] = useState<boolean | undefined>(undefined);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const bookClicked = (id: number) => {
    setActiveBook(id);
  }

  const removeActiveBook = (e: MouseEvent) => {
    setActiveBook(-1);
  }

  useEffect(()=>{
    console.log(staticBg);
    if(staticBg == false){
      bgVideoRef.current?.play();
    }else if(staticBg == true){
      bgVideoRef.current?.pause();
    }
  }, [staticBg])

  const renderBg = () => {
    return <div className='background-video'>
      <video ref={bgVideoRef} src={staticBg == undefined ? undefined : backgroundVideo} className={classNames({ "no-display": (staticBg == undefined) })} muted={true} autoPlay={true} loop={true}></video>
    </div>
  }

  return (
    <>
      {renderBg()}
      <BookContext.Provider value={{ activeBook, setActiveBook }}>
        <ContactCard bgState={[staticBg, setStaticBg]}></ContactCard>
        <div className='books'>
          <div className="wrapper-background" onClick={removeActiveBook}></div>
          <Book id={0} tag='Who Am I' preventClick={activeBook != -1 && activeBook != 0} active={activeBook == 0} onClick={bookClicked.bind(null, 0)}>
            <Summary></Summary>
          </Book>
          <Book id={1} tag='Projects' preventClick={activeBook != -1 && activeBook != 1} active={activeBook == 1} onClick={bookClicked.bind(null, 1)}>bişeyler</Book>
          <Book id={2} tag='CV' preventClick={activeBook != -1 && activeBook != 2} active={activeBook == 2} onClick={bookClicked.bind(null, 2)}>
            <div className="full-height-auto-width">
              <CV></CV>
            </div>
          </Book>
        </div>
      </BookContext.Provider>
    </>
  )
}

export default App