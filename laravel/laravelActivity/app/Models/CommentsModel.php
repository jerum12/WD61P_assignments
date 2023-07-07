<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentsModel extends Model
{
    use HasFactory;

    public function posts() {
        return $this->belongsTo(PostsModel::class);
    }

    protected $table = 'comments';

    protected $fillables = ['comments_content', 'posts_id'];
}
