<?php

namespace Database\Seeders;

use App\Models\PostsModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        PostsModel::factory()->count(100)->create();
    }
}
