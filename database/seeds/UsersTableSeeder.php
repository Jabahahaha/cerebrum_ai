<?php

use Illuminate\Database\Seeder;
 use Illuminate\Support\Facades\DB;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'f_name' => "Mikhail",
            'l_name' => "Andreev",
            'image' => "user.jpg",
            'email' => 'admin@mail.com',
            'password' => bcrypt('codeastro.com'),
        ]);


    }
}
