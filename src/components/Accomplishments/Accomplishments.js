import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 10, text: 'Projects'},
  { number: 90, text: 'Grades were all 90+ %', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Accomplishments = () => (
  <Section>
    <SectionDivider divider/>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
