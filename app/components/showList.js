import React from 'react';
import ShowItem from './showItem';

const ShowList = (props) => {
  const shows = props.shows.map((show) => {
    if(pc._id) {
      return <ShowItem show={show} key={pc._id} onShowSelect={props.onShowSelect} />
    }
  });
  return (
    <div className="pc">
      {shows}
    </div>
  );
}

export default ShowList;