import React from 'react';
import style from '../../styles/VideoList.module.scss';
import listIcon from '../../assets/icon/list.png';
import gridIcon from '../../assets/icon/grid.png';
import VideoCardPage from './VideoCardPage';
import { VideoListProps } from '../../TypeProps/TypeProps';

const VideoList: React.FC<VideoListProps> = ({ videoList, searchField }) => {
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
          {
            searchField
            &&
            <span>
              Видео по запросу <q>{searchField}</q>
            </span>}
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
      <div
        className={style.video__list}
      >
        {
          videoList.map((s: any) => <VideoCardPage
            key={s.etag}
            snippet={s.snippet}
          />
          )
        }
      </div>
    </div>
  );
};

export default VideoList;