import React from 'react';
import md5 from 'md5';

function Gravatar (props) {
  const source = props.source;
  const hash = md5(source);

  return (
    <img
      className={props.className}
      src={props.avatarUrl || `https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="avatar"
    />
  );
}

export default Gravatar;