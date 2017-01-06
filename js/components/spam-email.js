import React from 'react';
import {Link} from 'react-router';

export default function SpamEmail (props){
  return (
    <div>
    <strong>
        {props.from}
    </strong>
      &nbsp;
      &nbsp;
      <strong>
        <Link to = {'/spam/' + props.id}>
              {props.title}
        </Link>
      </strong>
      <br/>
      <br/>
      <div>
        {props.content}
      </div>
    </div>
  );
};
