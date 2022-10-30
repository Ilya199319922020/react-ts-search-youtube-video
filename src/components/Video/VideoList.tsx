import React, { useState } from 'react';
import style from '../../styles/VideoList.module.scss';
import VideoCardPage from './VideoCardPage';
import { VideoListProps } from '../../TypeProps/TypeProps';
import { useAppSelector } from '../../hooks/redux';

const VideoList: React.FC<VideoListProps> = ({ videoList, searchField }) => {
  const [isActiveIcon, setIsActiveIcon] = useState(true);
  const { totalResults } = useAppSelector(state => state.videoSlice);

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
            && <>
              <span
                className={style.video__title_headerText}
              >
                Видео по запросу <q>
                  {searchField}
                </q>
              </span>
              <span
                className={style.video__title_headerTotal}
              >
                {
                  totalResults
                }
              </span>
            </>
          }
        </h4>
        <div
          className={style.video__title_icon}
        >
          <button
            onClick={() => setIsActiveIcon(false)}
          >
            <span
              className={
                isActiveIcon
                  ? style.video__title_iconImageList
                  : style.video__title_iconImageListActive
              }
            >
            </span>
          </button>
          <button
            onClick={() => setIsActiveIcon(true)}
          >
            <span
              className={
                isActiveIcon
                  ? style.video__title_iconImageGridActive
                  : style.video__title_iconImageGrid
              }
            >
            </span>
          </button>
        </div>
      </div>
      <div
        className={
          !isActiveIcon
            ? style.video__list_Active
            : style.video__list
        }
      >
        {
          videoList.map((s: any) => <VideoCardPage
            key={s?.etag}
            snippet={s?.snippet}
            isActiveIcon={isActiveIcon}
          />
          )
        }
      </div>
    </div>
  );
};

export default VideoList;