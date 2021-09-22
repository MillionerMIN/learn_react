import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import style from './SuperButton.module.scss';

type DefDefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefDefaultButtonPropsType & {};

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
  const { className, ...restProps } = props;

  const finalyClassName = `${style.default} ${className}`;

  return <button className={finalyClassName} {...restProps} />;
};