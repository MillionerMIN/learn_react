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

export const ControledInputWithFixedValue = () => <input value='Hello' />

