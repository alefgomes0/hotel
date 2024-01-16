<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class AvailabilityController extends Controller
{
    public function show(string $searchParams): JsonResponse
    {
        $sanitizedParams = strip_tags($searchParams);
        preg_match('/checkin=([^&]+)&checkout=([^&]+)&rooms=([^&]+)&adults=([^&]+)&children=([^&]+)/', $sanitizedParams, $matches);
    
        $checkIn = urldecode($matches[1]);
        $checkOut = urldecode($matches[2]);
        $rooms = urldecode($matches[3]);
        $adults = urldecode($matches[4]);
        $children = urldecode($matches[5]);

        $bookedRooms = DB::table('bookings')
        ->select('bookings.room_id')
        ->orWhereBetween('bookings.check_in', [$checkIn, $checkOut])
        ->orWhereBetween('bookings.check_out', [$checkIn, $checkOut])
        ->pluck('room_id')
        ->toArray();

        $availableRooms = DB::table('rooms')
            ->rightJoin('room_type', 'rooms.room_type_id', '=', 'room_type.id')
            ->select('rooms.id', 'room_type.type', 'room_type.description', 'room_type.price_per_day', 'room_type.photos')
            ->whereNotIn('rooms.id', $bookedRooms)
            ->where('room_type.occupants', '>=', $adults)
            ->get();
        
        if (sizeof($availableRooms) < $rooms) {
            return response()->json([
                'message' => 'Requirements are not met'
            ], 204);
        }

        return response()->json([
            'quarto' => $availableRooms
        ], 200);
    
    }
}
