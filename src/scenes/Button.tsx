import {Link} from "react-router";

const Button = ({label, linkTo}: {label: string, linkTo: string}) => {
    return (
        <Link to={linkTo} className="relative inline-flex items-center justify-start overflow-hidden inline-block px-14 py-6 font-bold rounded-full group">
            <span className="absolute top-0 left-0 w-60 h-60 transition-all duration-500 ease-in-out -translate-x-60 -translate-y-0 bg-white opacity-100 group-hover:-translate-x-0"></span> 
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-xl font-thin">
                {label}
            </span>
        </Link>
    );
};

export default Button;