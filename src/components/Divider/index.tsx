import React from 'react';

import { 
  Line,
} from './styles';

type Props = {
  type: 'feed' | 'profile';
}

export function Divider({ type }: Props) {
  return(
    <Line 
      type={type}
    />
  )
}