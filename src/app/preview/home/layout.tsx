import Explore from '@content/explore';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <Explore>{children}</Explore>;
};

export default Layout;
