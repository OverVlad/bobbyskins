import React from 'react';

const ProfileDataLoading = ({ loading, ...rest }) => (
  <div className={loading ? "-loading -active" : "-loading"}>
    <div className="-loading-inner">
      <i className="profile-data-loader fa fa-spinner fa-spin fa-5x fa-fw"></i>
    </div>
  </div>
)

export default ProfileDataLoading;
