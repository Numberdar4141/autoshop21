import Link from "next/link";

const Navigation = () => {
    const links = [
        { label: "Home", path: "/" },
       
       
    ];

    return (
        <>
            {links.map((link, index) => (
                <li className="list-inline-item" key={index}>
                    <Link href={link.path}>{link.label}</Link>
                </li>
            ))}
        </>
    );
};

export default Navigation;
