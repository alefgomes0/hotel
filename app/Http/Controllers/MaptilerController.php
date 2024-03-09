<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

class MaptilerController extends Controller
{
  public function show(): JsonResponse
  {
    $maptilerAPIKey = env('MAPTILER_API_KEY');
    return response()->json([
      'status' => 'success',
      'key' => $maptilerAPIKey
    ], 200);
  }
}
