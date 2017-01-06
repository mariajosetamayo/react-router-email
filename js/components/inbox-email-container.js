import React from 'react';

import EMAILS from '../emails';
import InboxEmail from './inbox-email';

export default function InboxEmailContainer(props){
  const email = EMAILS.inbox[props.params.emailId];
  return <InboxEmail id = {email.id} from = {email.from}
                title = {email.title} content = {email.content}/>
};
