import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import Member from './Components/Member';

const App = props => {
  const [memberList, setMemberList] = useState(props.members);
  const submit = member => setMemberList([...memberList, member]);
  const update = single => setMemberList([...memberList.map(member => {
    // single.id === member.id ? single : member;
    if (single.id === member.id) {
      return single;
    }
    else {
      return member;
    }
  })]);

  const del = single => setMemberList([...memberList.filter(member => member.id !== single.id)]);

  return (
    <div className="App">
      <header>
        <h1>Team Members</h1>
      </header>
      <div className='list'>
        {memberList.map((member, index) => (
          <Member key={index}
            update={update}
            del={del}
            member={member}
          />
        ))}
      </div>
      <Form submit={submit}/>
    </div>
  );
}

export default App;
