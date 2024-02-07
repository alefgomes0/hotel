<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Stripe;

class StripePaymentController extends Controller
{

  public function config()
  {
    $publishableKey = env('STRIPE_KEY');
    return response()->json([
      'publishableKey' => $publishableKey
    ], 200);
  }

    public function create_intent(Request $request)
    {
/*         $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        $intent = $stripe->paymentIntents->create(
          [
            'amount' => 1099,
            'currency' => 'usd',
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            'automatic_payment_methods' => ['enabled' => true],
          ]
        ); */
        
        return response()->json([
            'client_secret' => $request
        ]);
    }
}
