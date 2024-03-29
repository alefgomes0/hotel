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
            'check_in' => '2024-03-15 14:00:00',
            'check_out' => '2024-03-17 11:00:00',
            'total_price' => 1500.00,
        ]);

        DB::table('bookings')->insert([
            'guest_id' => 2,
            'room_id' => 13,
            'check_in' => '2024-03-22 14:00:00',
            'check_out' => '2024-03-22 11:00:00',
            'total_price' => 500.00,
        ]);
    }
}
