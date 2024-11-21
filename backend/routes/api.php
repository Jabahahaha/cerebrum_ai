<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserApiLimitController;
use App\Http\Controllers\StripeController;

// User API limits
Route::get('/user-api-limits/{userId}', [UserApiLimitController::class, 'getLimit']);
Route::post('/user-api-limits/{userId}', [UserApiLimitController::class, 'increment']);

// Stripe routes
Route::post('/stripe/customer', [StripeController::class, 'createCustomer']);
Route::post('/stripe/subscription', [StripeController::class, 'createSubscription']);
