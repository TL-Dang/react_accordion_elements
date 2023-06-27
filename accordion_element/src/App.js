import { useState } from 'react';
import './styles.css';

const faqs = [
  {
    title:
      'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    text: 'A woodchuck would chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood.',
  },
  {
    title: 'Does Sally sell seashells by the seashore?',
    text: 'She sells seashells by the seashore, The shells she sells are seashells, I’m sure.So if she sells seashells on the seashore, Then I’m sure she sells seashore shells.',
  },
  {
    title: 'Fuzzy Wuzzy Was a Bear',
    text: 'Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair, Fuzzy Wuzzy wasn’t really fuzzy,Was he?',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className='accordion'>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}
