<?php

use App\Http\Controllers\AmenityController;
use App\Http\Controllers\FloorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\RoomTypeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Route::resource('room-types', RoomTypeController::class);
Route::resource('amenities', AmenityController::class);
Route::resource('rooms', RoomController::class);
Route::resource('floors', FloorController::class);
