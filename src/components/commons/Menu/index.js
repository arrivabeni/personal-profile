import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const links = [
    {
      text: '<ME />',
      link: '/',
    },
    {
      text: 'Sobre Mim',
      link: '/about',
    },
    {
      text: 'Contato',
      link: '/contact',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <div>
        <a href={links[0].link}>
          {links[0].text}
        </a>
        </div>
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        {links.slice(1).map((link) => (
          <a href={link.link}>
            {link.text}
          </a>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
