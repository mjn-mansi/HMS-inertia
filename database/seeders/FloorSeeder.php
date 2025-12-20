<?php

namespace Database\Seeders;

use App\Models\Floor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FloorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (['First Floor', 'Second Floor', 'Third Floor'] as $roomType) {
            Floor::updateOrCreate(
                ['name' => $roomType]
            );
        }
    }
}
