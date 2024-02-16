<?php

namespace App\Traits;
use Illuminate\Support\Facades\DB;

trait CalculatePrice
{
  public function calculatePartialPrice(string $suiteInfo): array
  {     
		$suiteInfoArray = json_decode(strip_tags($suiteInfo));
		$id = $suiteInfoArray->id;
		$daysOfStay = $suiteInfoArray->daysOfStay;
		$TAX_RATE = 0.043;

		$pricePerDay = DB::table('room_type')
		->select('price_per_day')
		->join('rooms', 'room_type_id', '=', 'room_type.id')
		->where('rooms.id', '=', $id)
		->first();
		
		$partialAmount = $pricePerDay->price_per_day * $daysOfStay;
		$taxes = round($partialAmount * $TAX_RATE, 2);
		$partialPlusTaxes = $partialAmount + $taxes;
		
		return [
			'partialAmount' => $partialAmount, 
			'taxes' => $taxes, 
			'partialPlusTaxes' => $partialPlusTaxes
		];
  }

  public function calculateTotalPrice(string $suitesInfo): Array
  {
		$suitesTypeArray = json_decode(strip_tags($suitesInfo));
		$suitesType = $suitesTypeArray->suitesType;
		$daysOfStay = $suitesTypeArray->daysOfStay;
		$TAX_RATE = 0.043;
		$totalAmount = 0;

		foreach($suitesType as $suiteType) {
			$suitePrice = DB::table('room_type')
			->select('price_per_day')
			->where('type', '=', $suiteType)
			->first();
		
			$totalAmount += round(($suitePrice->price_per_day * $daysOfStay) + ($suitePrice->price_per_day * $daysOfStay * $TAX_RATE), 2);
		}

		return [
			'totalAmount' => $totalAmount
		];
  }
}