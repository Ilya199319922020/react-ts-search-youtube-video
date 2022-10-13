import React from 'react';
import listIcon from '../../assets/icon/list.png';

const VideoCard = () => {
  return (
    <div>
      <img src={ listIcon}  width={'157px'}/>
      <p>название видео</p>
      <p>описание с количеством просмотров</p>
    </div>
  )
};

export default VideoCard;