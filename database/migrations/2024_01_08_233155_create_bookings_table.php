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
            $table->unsignedBigInteger('guests_id');
            $table->foreign('guests_id')->references('id')->on('guests');
            $table->unsignedBigInteger('rooms_id');
            $table->foreign('rooms_id')->references('id')->on('rooms');
            $table->date('check_in');
            $table->date('check_out');
            $table->float('total_price');
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
