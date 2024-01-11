<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;
use App\Models\Room;
use Illuminate\Database\Query\Builder;

use Carbon\Carbon;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/rooms', function (Response $response) {
    $bookedRooms = DB::table('bookings')
        ->select('bookings.room_id')
        ->orWhereBetween('bookings.check_in', ['2024-01-01 14:00:00', '2024-01-05 12:00:00'])
        ->orWhereBetween('bookings.check_out', ['2024-01-01 14:00:00', '2024-01-25 12:00:00'])
        ->pluck('room_id')
        ->toArray();

    $availableRooms = DB::table('rooms')
        ->select()
        ->whereNotIn('rooms.id', $bookedRooms)
        ->get();


/*     $checkIn = new Carbon($bookedRooms[0]->check_in);
    $checkOut = new Carbon($bookedRooms[0]->check_out); 
    $diff = $checkOut->diffInDays($checkIn); */


    return response()->json([
        'quarto' => $availableRooms
    ]);
});