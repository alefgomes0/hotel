<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{

    public function getPartialAmount(string $suite_info): JsonResponse
    {   
        $price = $this->calculatePartialPrice($suite_info);
        // $price = $this->teste($suite_info);


/*         $suiteInfoArray = json_decode(strip_tags($suite_info));
        $id = $suiteInfoArray->id;
        $days_of_stay = $suiteInfoArray->daysOfStay;
        $TAX_RATE = 0.043;

        $price_per_day = DB::table('room_type')
        ->select('price_per_day')
        ->join('rooms', 'room_type_id', '=', 'room_type.id')
        ->where('rooms.id', '=', $id)
        ->first();
        
        $partialAmount = $price_per_day->price_per_day * $days_of_stay;
        $taxes = round($partialAmount * $TAX_RATE, 2);
        $partialPlusTaxes = $partialAmount + $taxes; */

        return response()->json(
            'price' => $price
        , 200);
    }

    public function get_total_amount(string $suites_info): JsonResponse
    {
        $suites_type_object = json_decode(strip_tags($suites_info));
        $suite_types = $suites_type_object->suiteTypes;
        $days_of_stay = $suites_type_object->daysOfStay;
        $TAX_RATE = 0.043;
        $totalAmount = 0;

        foreach($suite_types as $suite_type) {
            $suite_price = DB::table('room_type')
            ->select('price_per_day')
            ->where('type', '=', $suite_type)
            ->first();
        
            $totalAmount += ($suite_price->price_per_day * $days_of_stay) + ($suite_price->price_per_day * $days_of_stay * $TAX_RATE);
        }

        return response()->json([
            'totalAmount' => $totalAmount
        ], 200);
    }
}