<?php

namespace App\Http\Controllers;

use App\Models\Amenity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AmenityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Amenity::orderBy('name')->paginate(10);
        return Inertia::render('Admin/Amenities/Index', ['amenities' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        Amenity::updateOrCreate(['name' => $request->name], ['description' => $request->description]);
        Inertia::flash('message', 'Amenity added successfully!');
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
        //
    }
}
