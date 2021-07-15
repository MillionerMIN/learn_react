import { Meta } from "@storybook/react";
import React, { ChangeEvent, useRef, useState } from "react";

export default {
   title: 'input',
} as Meta;

export const UncontroledInput = () => <input />

export const TrackValueOfUncontroledInput = (onChang: () => void) => {
   const [value, setValue] = useState("");

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const actualValue = e.currentTarget.value;
      setValue(actualValue)
   }
   return <> <input onChange={onChange} /> -actual value: {value} </>
}

export const GetValueOfUncontroledInputByButtonPress = (onChang: () => void) => {
   const [value, setValue] = useState("");

   const inputRef = useRef<HTMLInputElement>(null); //get ref on input element
   const save = () => {
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value)
   }
   return <> <input ref={inputRef} />
      <button onClick={save}>save</button>
      -actual value: {value} </>
}

export const ControledInput = () => {
   const [perentValue, setPerentValue] = useState('');

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPerentValue(e.currentTarget.value)
   }

   return <input value={perentValue} onChange={onChange} />
}

export const ControledCheckbox = () => {
   const [perentValue, setPerentValue] = useState(false);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPerentValue(e.currentTarget.checked)
   }

   return <input type='checkbox' checked={perentValue} onChange={onChange} />
}

export const ControledSelect = () => {
   const [perentVelue, setPerentVelue] = useState<string | undefined>('2');

   const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setPerentVelue(e.currentTarget.value)
   }
   return <select value={perentVelue} onChange={onChange}>
      <option value="0">none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
   </select>
}

export const ControledInputWithFixedValue = () => <input value='Hello' />

