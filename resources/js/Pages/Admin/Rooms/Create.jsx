import { Link } from "@inertiajs/react";
import { Send } from "lucide-react";

export default function Room() {
    return (
        <>
            <div className="flex justify-between align-center mb-5">
                <h1 className="text-xl font-semibold">New Room</h1>
                <Link className="btn btn-outline btn-success cursor-pointer" href="/rooms">List</Link>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <select className="select border border-gray-200 rounded-md p-2 w-full">
                        <option value="" disabled>
                            Select Floor
                        </option>
                        <option>First Floor</option>
                        <option>Second Floor</option>
                        <option>Third Floor</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Enter Room number here.." className="input w-full"/>
                </div>

                <div>
                    <input type="text" placeholder="Enter Adult Occupancy here.." className="input w-full"/>
                </div>

                <div>
                    <input type="text" placeholder="Enter Child Occupancy here.." className="input w-full"/>
                </div>

                <div>
                    <select className="select border border-gray-200 rounded-md p-2 w-full">
                        <option value="" disabled>
                            Select Room Type
                        </option>
                        <option>Luxury</option>
                        <option>Deluxe</option>
                        <option>Standard</option>
                    </select>
                </div>

                 <div>
                    <select className="select border border-gray-200 rounded-md p-2 w-full">
                        <option value="" disabled>
                            Select Amenities
                        </option>
                        <option>Luxury</option>
                        <option>Deluxe</option>
                        <option>Standard</option>
                    </select>
                </div>


                {/* Button */}
                <div className="col-span-2 text-right mt-2">
                    <button type="submit" className="btn btn-success">
                        Save <Send size={15} strokeWidth={1.25} />
                    </button>
                </div>
            </form>

        </>
    );
}