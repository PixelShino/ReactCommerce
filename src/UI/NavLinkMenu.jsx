import { NavLink } from 'react-router-dom';
function NavMenuLink({ to, children }) {
  return (
    <NavLink
      to={to}
      //   className='text-xl font-medium text-gray-700 hover:text-black'
      className={({ isActive }) =>
        isActive
          ? 'text-xl font-bold text-gray-100 hover:text-gray-50 underline '
          : 'text-xl font-medium text-gray-200 hover:text-gray-50 '
      }
    >
      {children}
    </NavLink>
  );
}
export default NavMenuLink;
