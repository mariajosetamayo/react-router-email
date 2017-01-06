import React from 'react';
import {Link} from 'react-router';

export default function App (props) {
  return (
  <div>
      <h1>
        Umail
      </h1>
      <div>
      <strong>
        <Link to = {'/inbox'}>
              Inbox
        </Link>
      </strong>
      <br/>
      <br/>
      <strong>
        <Link to = {'/spam'}>
              Spam
        </Link>
      </strong>
      </div>
      <div className = "emails">
        {props.children}
      </div>
    </div>
  );
};
