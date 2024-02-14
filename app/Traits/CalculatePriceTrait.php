<?php

namespace App\Traits;
use Illuminate\Support\Facades\DB;

trait CalculatePriceTrait
{
  public function calculatePartialPrice(string $suiteInfo): array
  {
	$suiteInfoArray = json_decode(strip_tags($suiteInfo));
	$id = $suiteInfoArray->id;
	$daysOfStay = $suiteInfoArray->daysOfStay;
	$TAX_RATE = 0.043;

	$pricePerDay = DB::table('room_type')
	->select('pricePerDay')
	->join('rooms', 'room_type_id', '=', 'room_type.id')
	->where('rooms.id', '=', $id)
	->first();
	
	$partialAmount = $pricePerDay->pricePerDay * $daysOfStay;
	$taxes = round($partialAmount * $TAX_RATE, 2);
	$partialPlusTaxes = $partialAmount + $taxes;

	return [
	'partialAmount' => $partialAmount,
	'taxes' => $taxes,
	'partialPlusTaxes' => $partialPlusTaxes
	];
  }

  public function calculateTotalPrice(string $suitesInfo): array
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

		return [
			'totalAmount' => $totalAmount
		];
  }

  public function teste(string $a): string
  {
	return $a;
  }
}