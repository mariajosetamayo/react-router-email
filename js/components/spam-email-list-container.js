import React from 'react';
import EMAILS from '../emails';

import SpamEmailList from './spam-email-list';

export default function SpamEmailListContainer (){
  return (
      <SpamEmailList emailsInSpam = {EMAILS} />
  )
}
