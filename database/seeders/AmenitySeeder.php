<?php

namespace Database\Seeders;

use App\Models\Amenity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AmenitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $amenities = [
            [
                'name' => 'Bed',
                'description' => 'Comfortable single or double bed with clean mattress and pillows'
            ],
            [
                'name' => 'Air Conditioner',
                'description' => 'Air conditioned room with temperature control'
            ],
            [
                'name' => 'Non AC',
                'description' => 'Room without air conditioning, suitable for mild weather'
            ],
            [
                'name' => 'Attached Washroom',
                'description' => 'Private bathroom attached to the room'
            ],
            [
                'name' => 'Free Wi-Fi',
                'description' => 'High-speed internet access available in the room'
            ],
            [
                'name' => 'Television',
                'description' => 'LED TV with cable or satellite channels'
            ],
            [
                'name' => 'Room Service',
                'description' => '24x7 room service for food and beverages'
            ],
            [
                'name' => 'Hot Water',
                'description' => 'Hot water supply available in washroom'
            ],
            [
                'name' => 'Wardrobe',
                'description' => 'Storage space for clothes and luggage'
            ],
            [
                'name' => 'Mini Fridge',
                'description' => 'Small refrigerator for beverages and food'
            ],
        ];

        foreach ($amenities as $amenity) {
            Amenity::updateOrCreate(
                ['name' => $amenity['name']],
                ['description' => $amenity['description']]
            );
        }
    }
}
