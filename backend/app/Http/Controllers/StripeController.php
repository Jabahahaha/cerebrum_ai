<?php

namespace App\Http\Controllers;

use App\Services\StripeService;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    protected $stripeService;

    public function __construct(StripeService $stripeService)
    {
        $this->stripeService = $stripeService;
    }

    public function createCustomer(Request $request)
    {
        $customer = $this->stripeService->createCustomer($request->email);
        return response()->json($customer);
    }

    public function createSubscription(Request $request)
    {
        $subscription = $this->stripeService->createSubscription($request->customer_id, $request->price_id);
        return response()->json($subscription);
    }
}
