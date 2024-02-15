<?php

namespace App\Http\Controllers;
use App\Traits\CalculatePrice;
use Stripe;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

class StripePaymentController extends Controller
{
  use CalculatePrice;

  public function config()
  {
    $publishableKey = env('STRIPE_KEY');
    return response()->json([
      'publishableKey' => $publishableKey
    ], 200);
  }

  public function createIntent(string $suitesInfo): JsonResponse
  {
    $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
    //$suites = $this->calculateTotalPrice($suitesInfo);

    $intent = $stripe->paymentIntents->create([
      'amount' => 1001,
      'currency' => 'usd',
      'automatic_payment_methods' => ['enabled' => true],
    ]);
    
    return response()->json([
      'client_secret' => $intent
    ], 200);
  }
}
