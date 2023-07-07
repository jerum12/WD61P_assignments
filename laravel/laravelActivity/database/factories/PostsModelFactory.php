<?php

namespace Database\Factories;

use App\Models\PostsModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostsModel>
 */
class PostsModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = PostsModel::class;
    public function definition(): array
    {
        return [
            //
            'title' => $this->faker->text(10),
            'content' => $this->faker->text(10),
            'user_id' => $this->faker->unique()->numberBetween(1, 100),
            'category_id' => $this->faker->numberBetween(1, 100)
        ];
    }
}
