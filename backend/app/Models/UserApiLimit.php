<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserApiLimit extends Model
{
    use HasFactory;

    protected $table = 'user_api_limits'; // Define the table name

    protected $fillable = [
        'id',
        'user_id',
        'count',
    ]; // Fillable fields for mass assignment
}


