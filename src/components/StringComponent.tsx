import React from 'react';
import { StringProps } from './types';

export const StringComponent: React.FC<StringProps> = ({
  stringData
}) => {
  return (
    <>
      {
        stringData.map((word, index) => (
          <li key={index}>{ word }</li>
        ))
      }
    </>
  )
};