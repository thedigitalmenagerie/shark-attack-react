import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Gravestone({ firstName }, { lastName }) {
  return (
    <div className="Gravestone">
      <Card>
        <CardBody>
          <CardTitle>{lastName},{firstName}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

Gravestone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Gravestone;
