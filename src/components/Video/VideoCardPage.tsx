import React from 'react';
import listIcon from '../../assets/icon/list.png';
import style from '../../styles/VideoList.module.scss';
import { IVideoCard } from '../../models/VideoCard';

const VideoCardPage: React.FC<IVideoCard> = ({ snippet }) => {
  
  return (
    <div
    className={style.videoCard}
    >
      <img
      className={style.videoCard__item}
        src={
          snippet.thumbnails?.default?.url
        }
        height={'137.7px'}
        width={'245px'}
      />
      <p
      className={style.videoCard__title}
      >
        {
          snippet.title
        }
      </p>
      <p
      className={style.videoCard__description}
      >{
        snippet.description
      }</p>
    </div>
  )
};

export default VideoCardPage;