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

        // Define the pattern to capture room details
        $pattern = '/room=([^&]+)&adults=([^&]+)&children=([^&]+)/';

        // Use preg_match_all to capture all occurrences
        preg_match_all($pattern, $sanitizedParams, $matches, PREG_SET_ORDER);

        // Initialize arrays to store room details
        $rooms = [];
        $adults = [];
        $children = [];

        // Loop through the matches and store the values in arrays
        foreach ($matches as $match) {
            $rooms[] = urldecode($match[1]);
            $adults[] = urldecode($match[2]);
            $children[] = urldecode($match[3]);
        }

        // Now you can access the room details for each room selected
        // For example, to access details for the first room:
        $firstRoom = [
            'room' => $rooms[0],
            'adults' => $adults[0],
            'children' => $children[0],
        ];



/*         $sanitizedParams = strip_tags($searchParams);
        preg_match('/checkin=([^&]+)&checkout=([^&]+)&room=([^&]+)&adults=([^&]+)&children=([^&]+)/', $sanitizedParams, $matches);
    
        $checkIn = urldecode($matches[1]);
        $checkOut = urldecode($matches[2]);
        $room = urldecode($matches[3]);
        $adults = urldecode($matches[4]);
        $children = urldecode($matches[5]);

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
            ->where('room_type.occupants', '>=', $adults)
            ->get();
        
        if (sizeof($availableRooms) == 0) {
            return response()->json()([
                'message' => 'Not found'
            ], 404);
        }
        
        if (sizeof($availableRooms) < $rooms) {
            return response()->json([
                'message' => 'Requirements are not met'
            ], 204);
        }

        $groupedRooms = $availableRooms->groupBy('type'); */

        return response()->json([
            'quartos' => $adults[1]
        ], 200);
    
    }
}
