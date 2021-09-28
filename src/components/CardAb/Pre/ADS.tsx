import React from 'react';
import { SuperButton } from '../../SuperButton/SuperButton';
import style from './ADS.module.scss';

export const ADS = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={`${process.env.PUBLIC_URL + '/img/lamp.jpg'}`} alt="img-ad" />
        <div className={style.desc}>
          <h3>Заголовок</h3>
          <div className={style.location}>Харьков, Киевский - 11.08.2020</div>
          <div className={style.status}>
            <div>
              Месторасположения:
              <span>г.Херсон, Суворовский р-н</span>
            </div>
          </div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus facilisis nisl mauris eget tellus. Nisi, nisi, commodo
            tristique purus amet, aliquam est fringilla morbi. Integer velit
            phasellus turpis mattis accumsan morbi eget. Aliquet tristique
            magnis eget mi scelerisque. Metus, at vel integer amet sapien
            iaculis lobortis id nisl. At integer nulla lobortis a cras ultrices.
            Arcu amet dui, at turpis aenean molestie dignissim. Purus malesuada
            tellus a velit. Leo iaculis suspendisse mi nunc sed cras eu
            ultrices. Aliquet pellentesque ultrices congue eu lectus lectus
            netus. Id massa nisl blandit et vitae laoreet ultrices.
          </div>
          <div className={style.numberAd}>№ 87983687</div>
        </div>
      </div>
      <div className={style.person}>
        <div className={style.user}>
          <img
            src={`${process.env.PUBLIC_URL + '/img/man.png'}`}
            alt="img-ad"
          />
          <div className={style.userName}>Имя Фамилия</div>
          <div className={style.regDate}>На сайте с 21 авг. 2018</div>
        </div>
        <div>
          <SuperButton>Подтвердить</SuperButton>
          <SuperButton className={style.custom}>Отклонить</SuperButton>
        </div>
      </div>
    </div>
  );
};
