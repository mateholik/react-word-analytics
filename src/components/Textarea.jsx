import { useState } from 'react';
import Warning from './Warning';

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState('');
  const handleChange = (event) => {
    let newValue = event.target.value;

    if (newValue.includes('<script>')) {
      setWarningText('Script tags are not allowed.');
      newValue = newValue.replace(/<script>/g, '');
    } else if (newValue.includes('@')) {
      setWarningText('@ symbol is not allowed.');
      newValue = newValue.replace(/@/g, '');
    } else {
      setWarningText('');
    }

    setText(newValue);
  };
  return (
    <div className='textarea'>
      <textarea
        placeholder='Enter your text'
        value={text}
        onChange={handleChange}
        spellCheck='false'
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
