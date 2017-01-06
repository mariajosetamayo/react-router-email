import React from 'react';

import EMAILS from '../emails';
import SpamEmail from './spam-email';

export default function SpamEmailContainer(props){
  const spamEmail = EMAILS.spam[props.params.emailId];
  return <SpamEmail id = {spamEmail.id} from = {spamEmail.from}
                title = {spamEmail.title} content = {spamEmail.content}/>
};
