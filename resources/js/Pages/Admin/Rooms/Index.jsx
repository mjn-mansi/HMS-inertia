import { Link } from "@inertiajs/react";

export default function Room({data}) {
    return (
        <>
            <div className="flex justify-between align-center mb-5">
                <h1 className="text-xl font-semibold">Rooms</h1>
                <Link className="btn btn-outline btn-success cursor-pointer" href="/rooms/create">Add New</Link>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room no</th>
                            <th>Type</th>
                            <th>Floor</th>
                            <th>Adult Occupancy</th>
                            <th>Child Occupancy</th>
                            <th>Amenities</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && (
                            <tr><td colSpan="7" className="text-center">No data found</td></tr>
                        )}

                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.room_number}</td>
                                    <td>{item.roomType?.name ?? '-'}</td>
                                    <td>{item.floor?.name ?? '-'}</td>
                                    <td>{item.adult_occupancy}</td>
                                    <td>{item.child_occupancy}</td>
                                    <td>{item.amenities.map(amenity => amenity.name).join(', ')}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}