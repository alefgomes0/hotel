<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{
    public function get_partial_amount(string $suite_info): JsonResponse
    {   
        $suite_infoObject = json_decode(strip_tags($suite_info));
        $id = $suite_infoObject->id;
        $days_of_stay = $suite_infoObject->daysOfStay;
        $TAX_RATE = 0.043;

        $price_per_day = DB::table('room_type')
        ->select('price_per_day')
        ->where('id', '=', $id)
        ->get();
        
        $partialAmount = $price_per_day[0]->price_per_day * $days_of_stay;
        $taxes = round($partialAmount * $TAX_RATE, 2);
        $partialPlusTaxes = $partialAmount + $taxes;

        return response()->json([
            'partialAmount' => $partialAmount,
            'taxes' => $taxes,
            'partialPlusTaxes' => $partialPlusTaxes
        ], 200);
    }

    public function get_total_amount(string $suites_info)
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
