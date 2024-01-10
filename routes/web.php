<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;
use App\Models\Room;


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

Route::get('/rooms/{pica}', function (Response $response, string $pica) {
    $rooms = DB::table('bookings')
        ->rightJoin('rooms', 'bookings.room_id', '=', 'rooms.id' )
        ->rightJoin('room_type', 'rooms.room_type_id', '=', 'room_type.id')
        ->select('rooms.id', 'room_type.description')
        ->whereNotBetween('bookings.check_in', ['2024-01-15,', '2024-01-18'] )
        ->get();
    

    
    $teste = DB::table('rooms')
        ->select('rooms.id')
        ->get();

    return response()->json([
        'quarto' => $rooms
    ]);
});