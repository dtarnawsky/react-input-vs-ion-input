import React, { useState } from "react";
import { IonInput } from '@ionic/react';

const MyIonInput: React.FC = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (val: any) => {
    const input = val.replace(/\D/g, "");
    console.log('input is ' + input + '. val is ' + val);
    setInput(input);
  }

  return (
    <IonInput
      value={input}
      onIonChange={(e: any) => handleInputChange(e.detail.value)}>
    </IonInput>
  );
};

export default MyIonInput;

