<?php

namespace Database\Factories;

use App\Models\PostModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = PostModel::class;
    public function definition()
    {
        return [
            //
            'user_id' => $this->faker->randomDigitNotNull(),
            'category_id' => $this->faker->randomDigitNotNull(),
            'title' => $this->faker->name(),
            'content' => $this->faker->text(),
        ];
    }
}
