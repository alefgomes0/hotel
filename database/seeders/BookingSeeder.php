<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Booking;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('bookings')->insert([
            'guest_id' => 1,
            'room_id' => 1,
            'check_in' => '2024-01-12',
            'check_out' => '2024-01-20',
            'total_price' => 1.200,
        ]);
    }
}
