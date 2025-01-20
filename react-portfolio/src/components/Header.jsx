import NavTabs from "./NavTabs";

const x = '100%'

const Header = () => {
    return (
        <div className="fixed top-0 w-full">
    <div className="flex flex-row space-x-6 items-center bg-primary-color text-secondary-color h-16">
        <div className=""> 
            <img src="/assets/pfp.jpg" alt="" className="max-w-16" />
        </div>
        <NavTabs />
    </div>
    </div>
    )
}

export default Header;