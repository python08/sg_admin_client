import Link from 'next/link';
import { ReactNode } from 'react';
import { color } from '@global/colors';
import { webkitTapHighlightColor } from '@global/global.style';

type PlatFormLinkType = {
  icon: ReactNode;
  href: string;
};

const PlatformLink = (props: PlatFormLinkType) => {
  const { href, icon } = props;
  return (
    <Link
      style={{
        color: color.main.pureWhite,
        ...webkitTapHighlightColor,
      }}
      href={href}
    >
      {icon}
    </Link>
  );
};

export default PlatformLink;
