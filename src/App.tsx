import { createContext, MouseEvent, useEffect, useState } from 'react'
import Book from './Book';
import CV from './CV';
import Summary from './Summary';
import backgroundVideo from "./assets/videoplayback.mp4";
import "./assets/static_bg.jpg";
import ContactCard from './ContactCard';
import './index.css'

interface BookContextType {
  activeBook: number,
  setActiveBook: Function
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

function App() {

  const [activeBook, setActiveBook] = useState<number>(-1);
  const [staticBg, setStaticBg] = useState<boolean>(true);

  const bookClicked = (id: number) => {
    setActiveBook(id);
  }

  const removeActiveBook = (e: MouseEvent) => {
    setActiveBook(-1);
  }

  const renderBg = () => staticBg ? <div className='background-video static'></div> : <video className='background-video' src={backgroundVideo} muted={true} autoPlay={true} loop={true}></video>

  return (
    <BookContext.Provider value={{ activeBook, setActiveBook }}>
      <ContactCard bgState={[staticBg, setStaticBg]}></ContactCard>
      <div className='books'>
        <div className="wrapper-background" onClick={removeActiveBook}>
          {renderBg()}
        </div>
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
  )
}

export default App