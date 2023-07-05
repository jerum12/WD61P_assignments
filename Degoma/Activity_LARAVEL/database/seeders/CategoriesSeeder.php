<?php

namespace Database\Seeders;

use App\Models\CategoriesMOdel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        CategoriesMOdel::factory()->count(10)->create();
    }
}
