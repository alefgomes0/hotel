<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Models\Room;



class RoomController extends Controller
{
    public function show(string $searchInfo): JsonResponse 
    {
        $searchInfoObjects = json_decode($searchInfo);
        $checkIn = $searchInfoObjects->checkIn;
        $checkOut = $searchInfoObjects->checkOut;
    
        $bookedRooms = DB::table('bookings')
            ->select('bookings.room_id')
            ->orWhereBetween('bookings.check_in', [$checkIn, $checkOut])
            ->orWhereBetween('bookings.check_out', [$checkIn, $checkOut])
            ->pluck('room_id')
            ->toArray();
    
        $availableRooms = DB::table('rooms')
            ->rightJoin('room_type', 'rooms.room_type_id', '=', 'room_type.id')
            ->select('rooms.id', 'room_type.type', 'room_type.description', 'room_type.price_per_day')
            ->whereNotIn('rooms.id', $bookedRooms)
            ->get();
    
        
        return response()->json([
            'quarto' => $availableRooms
        ]);
    }
}
