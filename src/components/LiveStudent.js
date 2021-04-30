import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';

function LiveStudent({ firstName }, { lastName }) {
  return (
    <div className="LiveStudent">
      <Card>
        <CardBody>
          <CardTitle>{lastName},{firstName}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
