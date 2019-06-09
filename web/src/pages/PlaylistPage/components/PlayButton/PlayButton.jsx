import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './PlayButton.styled';

const PlayButton = ({
  isCurrentTrack,
  currentTrackStatus,
  onPlay,
  onPause,
}) => {
  if (!isCurrentTrack) {
    return <SC.PlayButton onClick={onPlay} />;
  }
  if (currentTrackStatus === 'playing') {
    return <SC.PauseButton onClick={onPause} />;
  }
  return <SC.PlayButton onClick={onPlay} />;
};

PlayButton.propTypes = {
  isCurrentTrack: PropTypes.bool.isRequired,
  currentTrackStatus: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};

export default PlayButton;
