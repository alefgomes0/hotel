<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Traits\CalculatePrice;
use Stripe;

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
    $suites = $this->calculateTotalAmount($suitesInfo);

    $intent = $stripe->paymentIntents->create([
      'amount' => $suites['totalAmount'],
      'currency' => 'usd',
      'automatic_payment_methods' => ['enabled' => true],
    ]);
    
    return response()->json([
      'client_secret' => 'fdsfdf'
    ], 200);
  }
}
