import React, { useState } from "react";
import { IonInput } from '@ionic/react';

const MyInput: React.FC = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (val: any) => {    
    const input = val.replace(/\D/g, "");
    console.log('input is ' + input + '. val is ' + val);
    setInput(input);
  }

  return (
    <input      
      value={input}
      onChange={(e: any) => handleInputChange(e.target.value)} />
  );
};

export default MyInput;

