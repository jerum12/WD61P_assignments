<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentsResource extends JsonResource
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
            'comments_content' => $this->comments_content,
            'post' => ['id' => $this->posts->id, 'title' => $this->posts->title, 'content' => $this->posts->content, 'category' => ['id' => $this->posts->category->id, 'category_name' => $this->posts->category->category_name],
            'user' => ['id' => $this->posts->user->id, 'name' => $this->posts->user->name]]
        ];
    }
}
