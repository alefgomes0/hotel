<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{
    public function get_partial_amount(Request $request): JsonResponse
    {
        $id = $request->input('id');
        $days_of_stay = $request->input('daysOfStay');
        $tax_rate = 0.043;

        $price_per_day = DB::table('room_type')
        ->select('price_per_day')
        ->where('id', '=', $id)
        ->get();
        
        $partialAmount = $price_per_day[0]->price_per_day * $days_of_stay;
        $taxes = round($partialAmount * $tax_rate, 2);
        $partialPlusTaxes = round($partialAmount + $taxes, 2);


        return response()->json([
            'partialAmount' => $partialAmount,
            'taxes' => $taxes,
            'partialPlusTaxes' => $partialPlusTaxes
        ], 200);
    }
}
