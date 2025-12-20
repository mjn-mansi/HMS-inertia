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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('room_id');
            $table->unsignedBigInteger('customer_id');

            $table->date('check_in_date');
            $table->time('check_in_time');
            $table->date('check_out_date');
            $table->time('check_out_time');

            $table->foreign('room_id')->references('id')->on('rooms')->onUpdate('cascade');
            $table->foreign('customer_id')->references('id')->on('customers')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
