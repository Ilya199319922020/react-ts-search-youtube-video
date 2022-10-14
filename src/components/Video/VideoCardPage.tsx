import React from 'react';
import listIcon from '../../assets/icon/list.png';
import { IVideoCard } from '../../models/VideoCard';

const VideoCardPage: React.FC<IVideoCard> = ({ snippet }) => {
  return (
    <div>
      <img
        src={
          snippet.thumbnails?.default?.url
        }
        width={'157px'}
      />
      <p>
        {
          snippet.title
        }
      </p>
      <p>{
        snippet.description
      }</p>
    </div>
  )
};

export default VideoCardPage;