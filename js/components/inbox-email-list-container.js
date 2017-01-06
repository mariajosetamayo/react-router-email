import React from 'react';
import EMAILS from '../emails';

import InboxEmailList from './inbox-email-list';


export default function InboxEmailListContainer (){
  return (
      <InboxEmailList emails = {EMAILS} />
  )
};
