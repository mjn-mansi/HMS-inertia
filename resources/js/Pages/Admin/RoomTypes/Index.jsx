import { Send } from "lucide-react";

export default function RoomTypes({data}) {
    return (
        <>
            <div className="flex justify-between align-center mb-5">
                <h1 className="text-xl font-semibold">Room Types</h1>
                <button className="btn btn-success cursor-pointer btn-outline" onClick={() => document.getElementById('roomType').showModal()}>Add New</button>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
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
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="roomType" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add new Room Type!</h3>
                    <div className="my-4">
                        <input type="text" placeholder="Enter Room Type here.." className="input w-full" />
                    </div>
                    <div className="my-4">
                        <textarea placeholder="Enter Description here.." className="textarea w-full"></textarea>
                    </div>
                    <div className="my-4 text-right">
                        <button type="submit" className="btn btn-success">Save <Send color="#121212" strokeWidth={1.25} size={15} /></button>
                    </div>
                </div>
            </dialog>
        </>
    );
}