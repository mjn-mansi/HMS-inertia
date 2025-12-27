import { Link, useForm, usePage } from "@inertiajs/react";
import { Send } from "lucide-react";

export default function Room({floors, roomTypes, amenities}) {

    const { data, setData, errors, reset, post, processing } = useForm({
        floor_id: '',
        room_number: '',
        adult_occupancy: '',
        child_occupancy: '',
        room_type_id: '',
        amenities: [],
    });

    const { flash } = usePage();

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/rooms', {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <div className="flex justify-between align-center mb-5">
                <h1 className="text-xl font-semibold">New Room</h1>
                <Link className="btn btn-outline btn-success cursor-pointer" href="/rooms">List</Link>
            </div>

            {flash.message && (
                <div className="text-success text-sm font-semibold mb-5">{flash.message}</div>  
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

                <div>
                    <select className="select border border-gray-200 rounded-md p-2 w-full" value={data.floor_id} onChange={e => setData('floor_id', e.target.value)}>
                        <option value="">
                            Select Floor
                        </option>
                        {
                            floors.map((floor) => (
                                <option key={floor.id} value={floor.id}>
                                    {floor.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Enter Room number here.." value={data.room_number} onChange={e => setData('room_number', e.target.value)} className="input w-full"/>
                </div>

                <div>
                    <input type="text" placeholder="Enter Adult Occupancy here.." value={data.adult_occupancy} onChange={e => setData('adult_occupancy', e.target.value)} className="input w-full"/>
                </div>

                <div>
                    <input type="text" placeholder="Enter Child Occupancy here.." value={data.child_occupancy} onChange={e => setData('child_occupancy', e.target.value)} className="input w-full"/>
                </div>

                <div>
                    <select className="select border border-gray-200 rounded-md p-2 w-full" value={data.room_type_id} onChange={e => setData('room_type_id', e.target.value)}>
                        <option value="">
                            Select Room Type
                        </option>
                        {
                            roomTypes.map((room) => (
                                <option key={room.id} value={room.id}>
                                    {room.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <select multiple className="select border border-gray-200 rounded-md p-2 w-full" value={data.amenities} onChange={e=>{
                        console.log(e.target.selectedOptions); 
                        const selected = Array.from(e.target.selectedOptions, option => option.value);                       
                        setData('amenities', selected);
                    }}>
                        <option value="">
                            Select Amenities
                        </option>
                         {
                            amenities.map((amenity) => (
                                <option key={amenity.id} value={amenity.id}>
                                    {amenity.name}
                                </option>
                            ))
                        }
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