import React from 'react';
import './Body.css';
import Header from './Header';
import {useDataLayerValue} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  // Passing the Discover_weekly data from DataLayer
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      {/* Header */}
      <Header spotify={spotify} />

      {/* Building Body Info*/}
      <div className="body_info">
        {/* image */}
        <img src={discover_weekly?.images[0].url} alt="" />
        {/* Text of Info */}
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      {/* Songs view */}
      <div className="body__songs">
        <div className="song__icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* List of Songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
