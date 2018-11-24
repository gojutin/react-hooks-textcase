import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'left',
  },
  label: {
    color: 'white',
  },
  value: {
    color: 'rgb(92, 181, 255)',
    fontWeight: 'bold',
    width: '70px',
    textAlign: 'left',
    paddingLeft: '10px',
  },
};

function CountDisplay({ label, value }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.label}>{label}: </div>

      <div style={styles.value}>{value}</div>
    </div>
  );
}

CountDisplay.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CountDisplay;
