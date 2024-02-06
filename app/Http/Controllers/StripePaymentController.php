<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;

class StripePaymentController extends Controller
{
    public function stripePost(Request $request)
    {
        try 
        {
            
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
            $res = $stripe->tokens->create([
            'card' => [
                'number' => $request->number,
                'exp_month' => $request->exp_number,
                'exp_year' => $request->exp_year,
                'cvc' => $request->cvc,
            ],
            ]);

            Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
            
            $response = $stripe->charges->create([
              'amount' => $response->amount,
              'currency' => 'usd',
              'source' => $res->id,
              'description' => $res->description
            ]);

            return $response()->json([$response->status], 201);
        }
        catch (Exception $excpt)
        {
            return $response()->json([
                'response' => 'Error'
            ], 500);
        }
    }
}
