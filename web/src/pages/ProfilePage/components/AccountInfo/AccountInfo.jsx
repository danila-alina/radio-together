import React from 'react';

import UserAvatar from '../UserAvatar';

import * as SC from './AccountInfo.styled';

class AccountInfo extends React.Component {
  render() {
    return (
      <SC.StyledAccountInfo>
        <UserAvatar cover="http://localhost:3001/image/1560153904819.jpg" />
        <SC.UserInfo>
          <SC.UserName>Dan Krachkouski</SC.UserName>
          <SC.UserPreferences>
            <SC.UserFollowers>
              <SC.TextBold>12&nbsp;</SC.TextBold>
              Followers
            </SC.UserFollowers>
            <SC.UserFollowing>
              Following:&nbsp;
              <SC.TextBold>11</SC.TextBold>
            </SC.UserFollowing>
          </SC.UserPreferences>
        </SC.UserInfo>
      </SC.StyledAccountInfo>
    );
  }
}

export default AccountInfo;
