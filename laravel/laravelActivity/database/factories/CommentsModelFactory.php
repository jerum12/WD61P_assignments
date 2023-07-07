<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommentsModel>
 */
class CommentsModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $table = 'comments';
    public function definition(): array
    {
        return [
            //
            'comments_content' => $this->faker->text(),
            'posts_id' => $this->faker->numberBetween(1, 100)
        ];
    }
}
