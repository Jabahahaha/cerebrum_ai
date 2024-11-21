<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserSubscriptionsTable extends Migration
{
    public function up()
    {
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->string('id')->primary(); // Corresponds to `@id @default(cuid())`
            $table->string('user_id')->unique(); // Corresponds to `userId String @unique`
            $table->string('stripe_customer_id')->nullable()->unique(); // Corresponds to `stripeCustomerId String? @unique`
            $table->string('stripe_subscription_id')->nullable()->unique(); // Corresponds to `stripeSubscriptionId String? @unique`
            $table->string('stripe_price_id')->nullable(); // Corresponds to `stripePriceId String?`
            $table->dateTime('stripe_current_period_end')->nullable(); // Corresponds to `stripeCurrentPeriodEnd DateTime?`
            $table->timestamps(); // Adds `created_at` and `updated_at`
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_subscriptions');
    }
}
