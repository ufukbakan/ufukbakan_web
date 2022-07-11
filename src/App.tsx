import { MouseEvent, useEffect, useState } from 'react'
import Book from './Book';
import CV from './CV';
import Summary from './Summary';
import backgroundVideo from "./assets/videoplayback.mp4";

function App() {

  const [activeBook, setActiveBook] = useState<number>(-1);

  function bookClicked(id: number) {
    setActiveBook(id);
  }

  function removeActiveBook(e: MouseEvent) {
    setActiveBook(-1);
  }

  return (
    <>
      <video className='background-video' src={backgroundVideo} muted={true} autoPlay={true} loop={true}></video>
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
    </>
  )
}

export default App
