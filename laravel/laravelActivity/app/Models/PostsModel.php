<?php

namespace App\Models;

use App\Models\User;
use App\Models\CategoriesModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostsModel extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(CategoriesModel::class);
    }

    protected $table = 'posts';

    protected $fillable = ['title', 'content', 'user_id', 'category_id'];
}
