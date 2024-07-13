import { ReactNode } from 'react';
import { color } from '@global/colors';

import { style } from './style';

type MarqueeProps = {
  children: ReactNode;
  speed: number;
};

const Marquee = ({ children, speed }: MarqueeProps) => {
  const animationDuration = speed ? `${speed}s` : '15s'; // Adjust speed based on prop
  return (
    <div className="marquee-container">
      <div className="marquee-content" style={{ animationDuration }}>
        {children}
      </div>{' '}
      <div className="marquee-content" style={{ animationDuration }}>
        {children}
      </div>{' '}
      {/* eslint-disable */}
      <style jsx>{`
        ${style(color.main.secondaryLight)}
      `}</style>
    </div>
  );
};

export default Marquee;
