import React from 'react';
import { SuperButton } from '../SuperButton/SuperButton';
import style from './CardApplication.module.scss';

export const CardApplication = () => {
  return (
    <div className={style.container}>
      <img
        src={`${process.env.PUBLIC_URL + '/img/Rectangle_40.jpg'}`}
        alt="img"
      />
      <div className={style.desc}>
        <h3>Заголовок</h3>
        <div className={style.location}>Харьков, Киевский - 3 авг.</div>
        <div className={style.status}>
          <div>
            Статус:
            <span>На проверке</span>
          </div>
          <div>
            Раздел:
            <span>Отдам</span>
          </div>
        </div>
        <div className={style.theme}>
          <span>Животные</span> / <span>Домашние животные</span>
        </div>
      </div>
      <div className={style.buttons}>
        <SuperButton>Подтвердить</SuperButton>
        <SuperButton className={style.custom}>Отклонить</SuperButton>
      </div>
    </div>
  );
};
