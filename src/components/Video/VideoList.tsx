import React, { useState } from 'react';
import style from '../../styles/VideoList.module.scss';
import listIcon from '../../assets/icon/list.png';
import gridActive from '../../assets/icon/gridActive.png';
import listIconActive from '../../assets/icon/listActive.png';
import grid from '../../assets/icon/grid.png';
import VideoCardPage from './VideoCardPage';
import { VideoListProps } from '../../TypeProps/TypeProps';

const VideoList: React.FC<VideoListProps> = ({ videoList, searchField }) => {
  const [isActiveIcon, setIsActiveIcon] = useState(true);
  

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
          <button
            onClick={()=>setIsActiveIcon(false)}
          >
            <img src={isActiveIcon ? listIcon : listIconActive} />
          </button>
          <button
            onClick={()=>setIsActiveIcon(true)}
          >
            <img src={isActiveIcon ? gridActive : grid} />
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