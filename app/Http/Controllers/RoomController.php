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
        $numOfRooms = sizeof($searchInfoObjects->numOfGuests);
        $firstRoomOccup = $searchInfoObjects->numOfGuests[0]->adult;
        $secondRoomOccup = sizeof($searchInfoObjects->numOfGuests) == 2 ? $searchInfoObjects->numOfGuests[1]->adult : -1;
        $thirdRoomOccup = sizeof($searchInfoObjects->numOfGuests) == 3 ? $searchInfoObjects->numOfGuests[2]->adult : -1;
    
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
