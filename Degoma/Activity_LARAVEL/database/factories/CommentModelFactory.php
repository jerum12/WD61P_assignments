<?php

namespace Database\Factories;

use App\Models\CommentModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CommentModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = CommentModel::class;
    public function definition()
    {
        return [
            //
            'post_id' => $this->faker->randomDigitNotZero(),
           'comment_content' =>$this->faker->text(),
        ];
    }
}
