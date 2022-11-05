import { Link } from './LinkButton.styled';

export const LinkButton = ({ to, children,end }) => {
  return (
    <>
      <Link to={to} end={end}>{children}</Link>
    </>
  );
};
