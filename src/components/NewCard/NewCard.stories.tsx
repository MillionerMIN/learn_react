import React from "react";
import { storiesOf } from "@storybook/react";
import { NewsCard } from "./NewsCard";
import styled from 'styled-components'

const Container = styled.div`
width: 400px;
height: 500px;
`

storiesOf('Tutorial/Design System/News Card', module).add('Primary', () => (
   <Container>
      <NewsCard imageSrc='https://miro.medium.com/max/1400/1*itlWgBn4CfMKGg7qmh7vHQ.jpeg'
         heading='Creating designs in Figma'
         summary='A brief tutorial on gow translate Figmadesigns into re-usable React components using styled-components and storybook'
         label='Tutorial'
         avatarSrc='https://i.pinimg.com/564x/5f/65/c3/5f65c30f6f8bbe7337c3881356fdadf8.jpg'
         author='Jeson'
         date='Jul 13, 2021' />
   </Container>
))

