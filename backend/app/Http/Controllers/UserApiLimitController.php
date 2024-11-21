<?php

namespace App\Http\Controllers;

use App\Models\UserApiLimit;
use Illuminate\Http\Request;

class UserApiLimitController extends Controller
{
    public function getLimit($userId)
    {
        $apiLimit = UserApiLimit::where('user_id', $userId)->first();
        if ($apiLimit) {
            return response()->json($apiLimit);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
