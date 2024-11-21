<?php

namespace App\Services;

use Stripe\Stripe;
use Stripe\Customer;
use Stripe\Subscription;

class StripeService
{
    public function __construct()
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    }

    public function createCustomer($email)
    {
        return Customer::create(['email' => $email]);
    }

    public function createSubscription($customerId, $priceId)
    {
        return Subscription::create([
            'customer' => $customerId,
            'items' => [['price' => $priceId]],
        ]);
    }
}
