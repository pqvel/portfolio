import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="flex justify-center  items-center text-5xl text-white gap-4 py-4">
			<NavLink
				className={({ isActive }) =>
					isActive
						? " bg-white text-black px-4 pt-2 pb-3 rounded-lg"
						: " px-4 pt-2 pb-3 rounded-lg"
				}
				to="/"
			>
				Главная
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? " bg-white text-black px-4 pt-2 pb-3 rounded-lg"
						: " px-4 pt-2 pb-3 rounded-lg"
				}
				to="/certificates"
			>
				Сертификаты
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? " bg-white text-black px-4 pt-2 pb-3 rounded-lg"
						: " px-4 pt-2 pb-3 rounded-lg"
				}
				to="/history"
			>
				История
			</NavLink>
		</nav>
	);
};

export default Nav;
