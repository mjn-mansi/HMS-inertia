<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_number');
            $table->unsignedBigInteger('floor_id');
            $table->unsignedBigInteger('room_type_id');
            $table->integer('adult_occupancy');
            $table->integer('child_occupancy');

            $table->foreign('room_type_id')->references('id')->on('room_types')->onUpdate('cascade');
            $table->foreign('floor_id')->references('id')->on('floors')->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
