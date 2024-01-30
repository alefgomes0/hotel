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
        $checkinCheckoutPattern = '/checkin=([^&]+)&checkout=([^&]+)/';
        preg_match($checkinCheckoutPattern, $sanitizedParams, $checkinCheckoutMatches);
        $checkIn = urldecode($checkinCheckoutMatches[1]);
        $checkOut = urldecode($checkinCheckoutMatches[2]);
        $roomPattern = '/room=([^&]+)&adults=([^&]+)&children=([^&]+)/';
        preg_match_all($roomPattern, $sanitizedParams, $roomMatches, PREG_SET_ORDER);
        $rooms = [];
        $adults = [];
        $children = [];
        
        foreach ($roomMatches as $match) {
            $rooms[] = urldecode($match[1]);
            $adults[] = urldecode($match[2]);
            $children[] = urldecode($match[3]);
        }

        $numOfRooms = sizeof($rooms);
        $firstRoomOccup = $adults[0];
        $secondRoomOccup = $numOfRooms > 1 ? $adults[1] : -1;
        $thirdRoomOccup = $numOfRooms > 2 ? $adults[2] : -1;

        
        $bookedRooms = DB::table('bookings')
            ->select('bookings.room_id')
            ->orWhereBetween('bookings.check_in', [$checkIn, $checkOut])
            ->orWhereBetween('bookings.check_out', [$checkIn, $checkOut])
            ->pluck('room_id')
            ->toArray();

        function get_available_rooms(int $occupants, array $unavailableRooms)
        {
            if ($occupants == -1) return '';
            return DB::table('rooms')
            ->leftJoin('room_type', 'rooms.room_type_id', '=', 'room_type.id')
            ->select('rooms.id', 'room_type.type', 'room_type.short_description', 'room_type.full_description', 'room_type.price_per_day', 'room_type.occupants')
            ->whereNotIn('rooms.id', $unavailableRooms)
            ->where('room_type.occupants', '>=', $occupants)
            ->get();
        }

        $firstRoomOpts = get_available_rooms($firstRoomOccup, $bookedRooms);
        $secondRoomOpts = get_available_rooms($secondRoomOccup, $bookedRooms);
        $thirdRoomOpts = get_available_rooms($thirdRoomOccup, $bookedRooms);

        if (sizeof($firstRoomOpts) == 0 || $secondRoomOpts != '' && sizeof($secondRoomOpts) == 0 || $thirdRoomOpts != '' && sizeof($thirdRoomOpts) == 0) 
        {
            return response()->json([], 204);
        }

        $groupedFirstRoom = $firstRoomOpts->groupBy('type');
        $groupedSecondRoom = $secondRoomOpts == '' ? '' : $secondRoomOpts->groupBy('type');
        $groupedThirdRoom = $thirdRoomOpts == '' ? '' : $thirdRoomOpts->groupBy('type');

        return response()->json([
            'suites' => [
                'firstSuite' => $groupedFirstRoom,
                'secondSuite' => $groupedSecondRoom,
                'thirdSuite' => $groupedThirdRoom
            ]
        ], 200);  
    }
}
