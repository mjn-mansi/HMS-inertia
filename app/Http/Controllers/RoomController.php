<?php

namespace App\Http\Controllers;

use App\Models\Amenity;
use App\Models\Floor;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Room::with(['roomType', 'floor', 'amenities'])->orderBy('room_number')->paginate(config('app.per_page'));
        return Inertia::render('Admin/Rooms/Index', ['rooms' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $floors = Floor::select('id', 'name')->get();
        $roomTypes = RoomType::select('id', 'name')->get();
        $amenities = Amenity::select('id', 'name')->get();
        return Inertia::render('Admin/Rooms/Create', ['floors' => $floors, 'roomTypes' => $roomTypes, 'amenities' => $amenities]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'room_number' => 'required|unique:rooms,room_number',
            'room_type_id' => 'required|exists:room_types,id',
            'floor_id' => 'required|exists:floors,id',
            'adult_occupancy' => 'required|min:1|max:5',
            'child_occupancy' => 'nullable|min:0|max:3',
            'amenities' => 'required|array',
            'amenities.*' => 'exists:amenities,id',
        ]);

        try {
            DB::beginTransaction();
            $room = Room::updateOrCreate(['room_number' => $request->room_number], ['room_type_id' => $request->room_type_id, 'floor_id' => $request->floor_id, 'adult_occupancy' => $request->adult_occupancy, 'child_occupancy' => $request->child_occupancy]);
            if ($request->filled('amenities')) {
                $room->amenities()->sync($request->amenities);
            }
            DB::commit();
            Inertia::flash('message', 'Room created successfully');
        } catch (\Exception $e) {
            Log::info($e->getMessage());
            DB::rollBack();
            Inertia::flash('error', 'Error creating room');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            Room::find($id)->delete();
            Inertia::flash('message', 'Room deleted successfully!');
        } catch (\Exception $e) {
            Log::info($e->getMessage());
            Inertia::flash('error', 'Error deleting Room!');
        }
    }
}
