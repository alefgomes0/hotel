<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Room;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\PriceController;


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
Route::get('/config', [StripePaymentController::class, 'config']);
Route::get('/create_intent/{suites_info}', [StripePaymentController::class, 'create_intent']);
Route::get('/calculate_price/partial/{suites_info}', [PriceController::class, 'getPartialAmount']);
Route::get('/calculate_price/total/{suites_info}', [PriceController::class, 'getTotalAmount']);