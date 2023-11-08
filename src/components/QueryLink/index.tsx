import { useLocation, NavLink } from "react-router-dom";

export default function QueryNavLink({ to, ...props }: any) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}