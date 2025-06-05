import {
  FACEBOOK_MAX_CHARS,
  INSTAGRAM_MAX_CHARS,
  LINKEDIN_MAX_CHARS,
} from '../lib/constants';
import { calculateReadingTimeInSeconds } from '../lib/utils';
import Stats from './Stats';
import Textarea from './Textarea';
import { useState } from 'react';

export default function Container() {
  const [text, setText] = useState('');

  const stats = {
    textCharactersAmount: text.length,
    textWordssAmount: text.trim().split(/\s+/).filter(Boolean).length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARS - text.length,
    linkedinCharactersLeft: LINKEDIN_MAX_CHARS - text.length,
    readTimeInSeconds: calculateReadingTimeInSeconds(text),
  };

  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
