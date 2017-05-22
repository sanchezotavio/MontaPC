import React from 'react';

import ShowItem from './showItem';

const ShowList = (props) => {
  const shows = props.shows.map((show) => {
    if (show._id) {
      return <ShowItem show={show} key={show._id} />
    }
  });
  return (
    <div className="pc">
      {shows}
    </div>
  );
}

export default ShowList;