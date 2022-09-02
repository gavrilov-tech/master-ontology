import React from 'react';

import './styles.scss';
import useStyles from './styles';

interface CoverProps {
  name: string | undefined;
  coverUrl: string;
}

const Cover: React.FC<CoverProps> = ({ name, coverUrl }) => {
  const classes = useStyles({ url: coverUrl });

  return (
    <div className="mb-3 shadow rounded position-relative" style={classes.cover}>
      <div className="d-flex flex-column justify-content-center ps-4 h-100 w-100 position-absolute">
        <h1 className="text-white cover-title">Welcome, {name}</h1>
      </div>
    </div>
  );
}

export default Cover;
