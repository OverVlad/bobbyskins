import React, { Component } from 'react';

class ProfileSettings extends Component {
  render() {
    return (
      <div className="profile-settings wrapper">
        <label>
          <input type="checkbox" />
          Выключить звуки на сайте
        </label>

        <div className="select-lang">
          <select name="lang">
            <option value="rus">Русский</option>
            <option value="en">Английский</option>
          </select>
          <p className="select-label">Выберите язык:</p>
        </div>
      </div>
    );
  }
}

export default ProfileSettings;
