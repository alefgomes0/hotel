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
            ->leftJoin('room_type', 'rooms.room_type_id', '=', 'room_type.id')
            ->select('rooms.id', 'room_type.type', 'room_type.short_description', 'room_type.full_description', 'room_type.price_per_day', 'room_type.occupants')
            ->whereNotIn('rooms.id', $bookedRooms)
            ->where('room_type.occupants', '>=', $numOfOccupants)
            ->get();

        if (sizeof($availableRooms) == 0) {
            return response()->json()([
                'message' => 'Not found'
            ], 404);
        }
        
        if (sizeof($availableRooms) < $numOfApartments) {
            return response()->json([
                'message' => 'Requirements are not met'
            ], 204);
        }

        $groupedRooms = $availableRooms->groupBy('type');

        return response()->json([
            'quartos' => $groupedRooms
        ], 200);
    }
}
