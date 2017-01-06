import React from 'react';
import InboxEmail from './inbox-email';

export default function InboxEmailList (props){
  const emails = Object.keys(props.emails.inbox).map((emailId, index) => {
    const email = props.emails.inbox[emailId];
    return (
      <li key = {index}>
        <InboxEmail id = {email.id} from = {email.from}
               title = {email.title} />
      </li>
    );
  });

  return (
    <ul>
      {emails}
    </ul>
  );
};
