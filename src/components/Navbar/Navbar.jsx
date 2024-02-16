export default function Navbar() {
    return (
        <nav className="flex justify-between py-4 px-5">
            <h1 className="font-extrabold">Bioexplore</h1>
            <div className="flex gap-5">
                <p className="font-semibold">About</p>
                <p className="font-semibold">Services</p>
                <p className="font-semibold">Portfolio</p>
            </div>
            <div>user</div>
        </nav>
    )
}