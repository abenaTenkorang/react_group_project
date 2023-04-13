import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Profile = () => {
  const { missions, rockets } = useSelector((state) => state);

  const allMissions = missions.missions.filter((msn) => msn.joined);
  const bookedRockets = rockets.rockets.filter((rkt) => rkt.reserved);

  const missionElements = (
    <ul>
      {allMissions.map((msn) => (
        <li key={msn.id}>{msn.name}</li>
      ))}
    </ul>
  );
  const rocketElements = (
    <ul>
      {bookedRockets.map((rkt) => (
        <li key={rkt.id}>{rkt.rocket_name}</li>
      ))}
    </ul>
  );

  const noRocket = (
    <ul>
      <li>No Rocket Reserved</li>
    </ul>
  );

  const noMission = (
    <ul>
      <li>Oops! You have not joined any mission yet.</li>
    </ul>
  );

  return (
    <div className="profile">
      <div className="profile-missions">
        <h2 className="profile-rocket-missions">My Missions</h2>
        {missionElements.props.children.length ? missionElements : noMission}
      </div>
      <div className="profile-rockets">
        <h2 className="profile-rocket-missions">My Rockets</h2>
        {rocketElements.props.children.length ? rocketElements : noRocket}
      </div>
    </div>
  );
};

export default Profile;
