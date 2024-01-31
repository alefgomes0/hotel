<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;
use App\Models\Room;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\AvailabilityController;



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

Route::get('/rooms/{searchInfo}', [RoomController::class, 'show']);

Route::get('/availability/{searchParams}', [AvailabilityController::class, 'show']);