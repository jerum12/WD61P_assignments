<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'category' => ['id' => $this->category->id, 'category_name' => $this->category->category_name],
            'user' => ['id' => $this->user->id, 'name' => $this->user->name]
        ];
    }
}
