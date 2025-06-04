import Stats from './Stats';
import Textarea from './Textarea';
import { useState } from 'react';

export default function Container() {
  const [text, setText] = useState('');

  const stats = {
    textCharactersAmount: text.length,
    textWordssAmount: text.trim().split(/\s+/).filter(Boolean).length,
    instagramCharactersLeft: 280 - text.length,
    facebookCharactersLeft: 2200 - text.length,
  };

  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
