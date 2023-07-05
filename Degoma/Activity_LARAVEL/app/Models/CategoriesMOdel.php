<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriesMOdel extends Model
{
    use HasFactory;
    protected $table = 'table_categories';
    protected $fillable = [
        'category_name',
    ];
}
