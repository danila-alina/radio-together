import React from 'react';

import UserAvatar from '../UserAvatar';

import {
  StyledAccountInfo, UserInfo, UserName,
  UserPreferences, UserFollowers, UserFollowing, TextBold,
} from './AccountInfo.styled';

class AccountInfo extends React.Component {
  render() {
    return (
      <StyledAccountInfo>
        <UserAvatar />
        <UserInfo>
          <UserName>Alina Arlova</UserName>
          <UserPreferences>
            <UserFollowers>
              <TextBold>90&nbsp;</TextBold>
              Followers
            </UserFollowers>
            <UserFollowing>
              Following:&nbsp;
              <TextBold>91</TextBold>
            </UserFollowing>
          </UserPreferences>
        </UserInfo>
      </StyledAccountInfo>
    );
  }
}

export default AccountInfo;
