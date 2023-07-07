<?php

namespace Database\Seeders;

use App\Models\CommentsModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        CommentsModel::factory()->count(100)->create();
    }
}
