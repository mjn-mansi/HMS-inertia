import { Link, usePage } from "@inertiajs/react";

export default function Room({rooms}) {
    const {flash} = usePage();
    return (
        <>
            <div className="flex justify-between align-center mb-5">
                <h1 className="text-xl font-semibold">Rooms</h1>
                <Link className="btn btn-outline btn-success cursor-pointer" href="/rooms/create">Add New</Link>
            </div>

            {flash.message && (
                <div className="text-success text-sm font-semibold mb-5">{flash.message}</div>  
            )}

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room no</th>
                            <th>Floor</th>
                            <th>Type</th>
                            <th>Adult Occupancy</th>
                            <th>Child Occupancy</th>
                            <th>Amenities</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.total === 0 && (
                            <tr><td colSpan="7" className="text-center">No data found</td></tr>
                        )}

                        {
                            rooms.data.map((item, index) => (
                                <tr key={index}>
                                    <th>{rooms.from + index}</th>
                                    <td>{item.room_number}</td>
                                    <td>{item.floor?.name ?? '-'}</td>
                                    <td>{item.room_type?.name ?? '-'}</td>
                                    <td>{item.adult_occupancy}</td>
                                    <td>{item.child_occupancy}</td>
                                    <td>{item.amenities.map(amenity => amenity.name).join(', ')}</td>
                                    <td>
                                        <Link href={`/rooms/${item.id}`} method="delete" as="button" className="btn btn-sm bg-red-500 text-white hover:bg-red-600 cursor-pointer">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center my-5">
                <div className="flex gap-1">
                    {
                        rooms.links.map((link, index) => (
                            link.url ?
                                <Link key={index} href={link.url} className={`btn ${link.active ? 'btn-primary' : 'btn-outline-primary'} btn-sm`} dangerouslySetInnerHTML={{__html: link.label}} />
                            :
                                <span key={index} className="btn btn-outline-secondary btn-sm disabled cursor-not-allowed" dangerouslySetInnerHTML={{__html: link.label}} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}