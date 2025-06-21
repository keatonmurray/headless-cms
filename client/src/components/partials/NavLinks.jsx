import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MENUS } from '../../graphql/queries/menu';

const NavLinks = () => {
  const { data } = useQuery(GET_MENUS);
  const menuItems = data?.menuItems?.nodes || [];

  return (
    <ul className="navbar-nav mt-5 list-unstyled m-0 p-0 justify-content-center d-flex flex-column flex-md-row">
      {menuItems.map((item) => {
        const connectedNode = item.connectedNode?.node;
        const uri = connectedNode?.uri;
        const typename = connectedNode?.__typename;

        const isInternal = !!uri;
        let linkTo = uri;

        if (isInternal) {
          if (typename === 'ProductCategory') {
            const slug = uri?.split('/').filter(Boolean).pop();
            linkTo = `/category/${slug}`;
          }
        }

        return (
          <li key={item.id} className="nav-item py-1 me-3">
            {isInternal ? (
              <Link to={linkTo} className="nav-link text-decoration-none text-dark">
                {item.label}
              </Link>
            ) : (
              <a
                href={item.url}
                className="nav-link text-decoration-none text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
