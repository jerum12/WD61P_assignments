<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title'=>$this->faker->name(),
            'content'=>$this->faker->text(),
            'user_id'=>$this->faker->randomNumber(),
            'category_id'=>$this->faker->randomNumber()
        ];
    }
}
