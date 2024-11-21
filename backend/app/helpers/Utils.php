<?php

namespace App\Helpers;

class Utils
{
    public static function formatDate($date)
    {
        return date('Y-m-d', strtotime($date));
    }
}
