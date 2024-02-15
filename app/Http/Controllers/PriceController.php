<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Traits\CalculatePrice;

class PriceController extends Controller
{
    use CalculatePrice;
    
    public function getPartialAmount(string $suiteInfo): JsonResponse
    {   
        $price = $this->calculatePartialPrice($suiteInfo);
        return response()->json([
            'partialAmount' => $price['partialAmount'],
            'taxes' => $price['taxes'],
            'partialPlusTaxes' => $price['partialPlusTaxes']
        , 200]);
    }

    public function getTotalAmount(string $suitesInfo): JsonResponse
    {
        $suites = $this->calculateTotalPrice($suitesInfo);
        return response()->json([
            'totalAmount' => $suites['totalAmount']
        ], 200);
    }
}