<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{
    public function get_partial_amount(string $suiteInfo): JsonResponse
    {   
        $suiteInfoObject = json_decode(strip_tags($suiteInfo));
        $id = $suiteInfoObject->id;
        $days_of_stay = $suiteInfoObject->daysOfStay;
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
}
