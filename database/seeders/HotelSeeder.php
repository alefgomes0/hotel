<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hotel')->insert([
            'name' => 'Hotel Laravel',
            'address' => '123 Very Real Street. LRV, PHP',
            'phone' => '433123-2350',
            'email' => 'laravelhotel@email.com',
            'check_in' => '14:00',
            'check_out' => '11:00'
        ]);
    }
}
