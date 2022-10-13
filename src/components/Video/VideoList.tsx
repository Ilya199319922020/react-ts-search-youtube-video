import React from 'react';
import style from '../../styles/Video.module.scss';
import listIcon from '../../assets/icon/list.png';
import gridIcon from '../../assets/icon/grid.png';
import VideoCard from './VideoCard';

const VideoList = () => {
  return (
    <div
      className={style.video}
    >
      <div
        className={style.video__title}
      >
        <h4
          className={style.video__title_header}
        >
          Видео по запросу "ххххааа" количество
        </h4>
        <div
          className={style.video__title_icon}
        >
          <button>
            <img src={listIcon} />
          </button>
          <button>
            <img src={gridIcon} />
          </button>
        </div>
      </div>
      <VideoCard />
    </div>
  );
};

export default VideoList;