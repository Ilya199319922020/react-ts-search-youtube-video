import React from 'react';
import listIcon from '../../assets/icon/list.png';
import style from '../../styles/VideoList.module.scss';
import { IVideoCard } from '../../models/VideoCard';
import { VideoCardProps } from '../../TypeProps/TypeProps';

const VideoCardPage: React.FC<any> = ({ snippet, isActiveIcon }) => {

  return (
    <div
      className={!isActiveIcon ? style.videoCard_Active : style.videoCard}
    >
      <img
        className={!isActiveIcon ? style.videoCard__item_Active : style.videoCard__item}
        src={
          snippet.thumbnails?.default?.url
        }
        // height={'137.7px'}
        // width={'245px'}
      />
      <p
        className={!isActiveIcon ? style.videoCard__title_Active : style.videoCard__title}
      >
        {
          snippet.title
        }
      </p>
      <p
        className={!isActiveIcon ? style.videoCard__description_Active : style.videoCard__description}
      >{
          snippet.description
        }</p>
    </div>
  )
};

export default VideoCardPage;