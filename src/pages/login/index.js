import React, {useEffect} from 'react';

export default function Login({ user }) {
  return (
    <div>
      <div>
        {user.name === 'Vitão' ? `${user.name} gay` : user.name}
      </div>
      <div>
        {user.idade}
      </div>
    </div>
  );
}
