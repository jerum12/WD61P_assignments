<?php

namespace Database\Factories;

use App\Models\CategoriesMOdel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategoriesMOdelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = CategoriesMOdel::class;
    public function definition()
    {
        return [
            //
            'category_name' =>$this->faker->name(),
        ];
    }
}
