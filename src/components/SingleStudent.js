import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle
} from 'reactstrap';
import '../App/App.scss';

const SingleStudent = ({ student }) => (
<Card className="singleStudent">
  <CardTitle tag="h5">
    {`${student.firstName} ${student.lastName}`}
  </CardTitle>
</Card>
);

SingleStudent.propTypes = {
  student: PropTypes.object.isRequired,
};

export default SingleStudent;
