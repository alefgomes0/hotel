<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


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

Route::get('/api/{checkin}/{checkOut}/{searchInfo}', function (string $checkin, string $checkout, string $searchInfo ) {
    $searchInfoObject = json_decode($searchInfo);
    return response($searchInfoObject);
});