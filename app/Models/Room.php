<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = ['room_number', 'room_type_id', 'floor_id', 'adult_occupancy', 'child_occupancy'];

    public function roomType()
    {
        return $this->belongsTo(RoomType::class);
    }

    public function amenities()
    {
        return $this->hasMany(RoomAmenity::class);
    }

    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }
}
