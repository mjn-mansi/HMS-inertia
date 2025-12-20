<?php

namespace Database\Seeders;

use App\Models\RoomType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roomTypes = [
            [
                'name' => 'Luxury',
                'description' => 'Premium rooms with high-end amenities and elegant interiors'
            ],
            [
                'name' => 'Deluxe',
                'description' => 'Spacious rooms with modern facilities and comfort'
            ],
            [
                'name' => 'Standard',
                'description' => 'Basic rooms suitable for budget-friendly stays'
            ],
            [
                'name' => 'Special',
                'description' => 'Customized rooms for special occasions or premium guests'
            ],
            [
                'name' => 'Family',
                'description' => 'Large rooms designed for families with extra bedding'
            ],
            [
                'name' => 'Suite',
                'description' => 'Luxury suite with separate living area and bedroom'
            ],
        ];

        foreach ($roomTypes as $roomType) {
            RoomType::updateOrCreate(
                ['name' => $roomType['name']],
                ['description' => $roomType['description']]
            );
        }
    }
}
