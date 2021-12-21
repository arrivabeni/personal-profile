import React from 'react';
import Menu from '../Menu';
import { NotFoundWrapper } from './styles/NotFoundWrapper';

export default function NotFound() {
  return (
    <div>
      <Menu />
      <NotFoundWrapper>
        Página não encontrada
      </NotFoundWrapper>
    </div>
  );
}
