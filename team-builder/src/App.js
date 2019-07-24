import React, { useState } from 'react';
import './App.css';

import Form from './Form';
import Member from './Member';

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
      <h1>Team Members</h1>
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
      <button className="btn-edit">Edit</button>
    </div>
  );
}

export default App;
