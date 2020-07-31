import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import contentStyle from '../styles/content.module.css';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-semibold text-3xl text-gray-900">Guru</div>
          <div className="text-xl">Next.js Boilerplate</div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a>About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a href="https://github.com/ixartz/Next-js-Boilerplate">GitHub</a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className={contentStyle.content}>{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8">
        Made with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://creativedesignsguru.com">Ixartz</a>
      </div>
    </div>
  </div>
);

export { Main };
