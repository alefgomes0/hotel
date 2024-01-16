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
        $searchInfoObjects = json_decode(strip_tags($searchInfo));
        $checkIn = $searchInfoObjects->checkIn;
        $checkOut = $searchInfoObjects->checkOut;
        $numOfApartments = $searchInfoObjects->numOfGuests->apartment;
        $numOfOccupants = $searchInfoObjects->numOfGuests->adult;
    
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
            ->where('room_type.occupants', '>=', $numOfOccupants)
            ->get();
        
        if (sizeof($availableRooms) < $numOfApartments) {
            return response()->json([
                'message' => 'Requirements are not met'
            ], 204);
        }

        return response()->json([
            'quarto' => $availableRooms
        ], 200);
    }
}
