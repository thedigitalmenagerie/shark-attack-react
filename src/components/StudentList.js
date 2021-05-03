import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudent';
import '../App/App.scss';

const StudentList = ({ studentArray }) => (
<ul>
    {studentArray.map((student) => (
    <SingleStudent key={student.id} student={student} />
    ))}
</ul>
);

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired,
};

export default StudentList;
