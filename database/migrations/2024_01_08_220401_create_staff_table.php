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
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 64);
            $table->string('last_name', 64);
            $table->string('phone', 64);
            $table->string('email', 64);
            $table->string('address', 255);
            $table->date('date_of_birth');
            $table->string('position', 64);
            $table->float('salary');
            $table->date('hire_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
