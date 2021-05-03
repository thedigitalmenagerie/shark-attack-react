import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  getDeadStudents,
  killStudent
} from '../helpers/data/StudentData';
import StudentList from '../components/StudentList';
import './App.scss';

function App() {
  const [livinStudents, setLivinStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivinStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killStudent();
    setLivinStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
    <h1>JavaScript Jaws</h1>
        <Button
          color='danger'
          onClick={killEmDead}
          disabled={livinStudents.length <= 0}
        >
          MONCH
        </Button>
      <div className="appContents">
      <div className='SharkTank'>
        <h2>Shark Tank</h2>

        <StudentList className="studentList" studentArray={livinStudents} />
      </div>
      <div className='graveyard'>
        <h2>Graveyard</h2>
      <StudentList studentArray={deadStudents}/>
      </div>
      </div>
    </div>
  );
}

export default App;
