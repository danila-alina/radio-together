import React from 'react';
import PropTypes from 'prop-types';

import {
  AvatarContainer, UserImage, GeneratedImage, GeneratedText,
} from './UserAvatar.styled';

class UserAvatar extends React.Component {
  render() {
    const { cover } = this.props;
    return (
      <AvatarContainer>
        {cover
          ? <UserImage src={cover} />
          : (
            <GeneratedImage topColor="#F1B9D2" bottomColor="#A67BC1">
              <GeneratedText>AA</GeneratedText>
            </GeneratedImage>
          )
        }
      </AvatarContainer>
    );
  }
}

UserAvatar.propTypes = {
  cover: PropTypes.string,
};

UserAvatar.defaultProps = {
  cover: '',
};

export default UserAvatar;
