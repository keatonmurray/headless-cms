import { Link } from 'react-router-dom';
import { GET_MENUS } from '../../graphql/queries/menu';
import { useQuery } from '@apollo/client';

const NavLinks = () => {

    const { data } = useQuery(GET_MENUS);
    const menuItems = data?.menuItems?.nodes || [];

    return (
        <ul className="navbar-nav mt-5 list-unstyled m-0 p-0 justify-content-center d-flex flex-column flex-md-row">
            {menuItems.map((item) => {
                const uri = item.connectedNode?.node?.uri;
                const isInternal = !!uri;

                return (
                    <li key={item.id} className="nav-item py-1 me-3">
                        {isInternal ? (
                            <Link to={uri} className="nav-link text-decoration-none text-dark">
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
