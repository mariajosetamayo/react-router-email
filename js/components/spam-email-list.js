import React from 'react';
import SpamEmail from './spam-email';

export default function SpamEmailList (props){
  const emailsInSpam = Object.keys(props.emailsInSpam.spam).map((emailId, index) => {
    const email = props.emailsInSpam.spam[emailId];
    return (
      <li key = {index}>
        <SpamEmail id = {email.id} from = {email.from}
               title = {email.title} />
      </li>
    );
  });

  return (
    <ul>
      {emailsInSpam}
    </ul>
  );
};
