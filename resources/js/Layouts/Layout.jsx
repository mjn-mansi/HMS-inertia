import { Link } from "@inertiajs/react";
import { BedDouble, House, HouseHeart, LayoutGrid, ListCollapse } from "lucide-react";

export default function Layout({ children }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4">Swagat Hotel</div>
                </nav>
                {/* Page content here */}
                <div className="p-10 max-w-7xl mx-auto">{children}</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <House color="#121212" strokeWidth={1.25} size={20}  />
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Room Types">
                                {/* Room Types icon */}
                                <Link className="flex gap-2" href="/room-types">
                                    <ListCollapse color="#121212" strokeWidth={1.25} size={20} />
                                    <span className="is-drawer-close:hidden">Room Types</span>
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Floor">
                                {/* Floor icon */}
                                <Link className="flex gap-2" href="/floors">
                                    <LayoutGrid color="#121212" strokeWidth={1.25} size={20}  />
                                    <span className="is-drawer-close:hidden">Floor</span>
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Amenity">
                                {/* Amenity icon */}
                                <Link className="flex gap-2" href="/amenities">
                                    <BedDouble color="#121212" strokeWidth={1.25} size={20} />
                                    <span className="is-drawer-close:hidden">Amenities</span>
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Room">
                                {/* Room icon */}
                                <Link className="flex gap-2" href="/rooms">
                                    <HouseHeart color="#121212" strokeWidth={1.25} size={20}  />
                                    <span className="is-drawer-close:hidden">Room</span>
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}