<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserApiLimitsTable extends Migration
{
    public function up()
    {
        Schema::create('user_api_limits', function (Blueprint $table) {
            $table->string('id')->primary(); // Corresponds to `@id @default(cuid())`
            $table->string('user_id')->unique(); // Corresponds to `userId String @unique`
            $table->integer('count')->default(0); // Corresponds to `count Int @default(0)`
            $table->timestamps(); // Adds `created_at` and `updated_at`
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_api_limits');
    }
}
