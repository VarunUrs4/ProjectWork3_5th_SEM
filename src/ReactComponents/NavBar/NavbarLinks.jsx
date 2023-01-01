const NavbarLinks = (props) => {
    return(<a href={props.href} className={props.navLinkClass}>{props.icon}<h3>{props.NavLinkName}</h3></a>);
}

export default NavbarLinks;