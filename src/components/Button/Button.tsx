import React from "react";
import styled from "styled-components";

const ButtonPrimery = styled.button`
   position: absolute;
   padding: 4px;
   min-width: 64px;
   height: 57px;
   background: radial-gradient(92.09% 85.42% at 86.3% 87.5%, 
      rgba(0, 0, 0, 0.23) 0%, 
      rgba(0, 0, 0, 0) 86.18%), 
      radial-gradient(65.28% 65.28% at 26.39% 20.83%, 
         rgba(255, 255, 255, 0.413) 0%, 
         rgba(255, 255, 255, 0) 69.79%, 
         rgba(255, 255, 255, 0) 100%), 
         #38C558;
   box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
   border-radius: 12px;
   color: #ffffff;
`
const ButtonSecondary = styled(ButtonPrimery)`
background: radial-gradient(92.09% 85.42% at 86.3% 87.5%,
      rgba(0, 0, 0, 0.23) 0%,
      rgba(0, 0, 0, 0) 86.18%),
      radial-gradient(65.28% 65.28% at 26.39% 20.83%,
         rgba(255, 255, 255, 0.413) 0%,
         rgba(255, 255, 255, 0) 69.79%,
         rgba(255, 255, 255, 0) 100%),
         #EC0E52;
`
const ButtonDefault = styled(ButtonPrimery)`
background: radial-gradient(92.09% 85.42% at 86.3% 87.5%,
      rgba(0, 0, 0, 0.23) 0%,
      rgba(0, 0, 0, 0) 86.18%),
      radial-gradient(65.28% 65.28% at 26.39% 20.83%,
         rgba(255, 255, 255, 0.413) 0%,
         rgba(255, 255, 255, 0) 69.79%,
         rgba(255, 255, 255, 0) 100%),
         #38D2D2;
`


export type ButtonType = {
   label: string,
   primery: 'primery' | 'secondary' | 'default'
}

const Button = ({ label, primery }: ButtonType) => {

   if (primery === 'primery') {
      return <ButtonPrimery>{label}</ButtonPrimery>
   } else if (primery === 'secondary') {
      return <ButtonSecondary>{label}</ButtonSecondary>
   } else {
      return <ButtonDefault>{label}</ButtonDefault>
   }
}

export {
   Button
}