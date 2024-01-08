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
        Schema::create('room_type', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['Standard', 'Prime', 'Deluxe']);
            $table->text('description');
            $table->float('price_per_day');
            $table->smallInteger('occupants');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room_type');
    }
};
