<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostModel extends Model
{
    use HasFactory;
    protected $table = 'table_posts';
    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'content',
    ];
}
