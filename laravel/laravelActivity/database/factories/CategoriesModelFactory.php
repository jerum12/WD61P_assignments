<?php

namespace Database\Factories;

use App\Models\CategoriesModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CategoriesModel>
 */
class CategoriesModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $table = CategoriesModel::class;
    public function definition(): array
    {
        return [
            //
            'category_name' => $this->faker->word()
        ];
    }
}
