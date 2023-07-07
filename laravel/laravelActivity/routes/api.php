<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::resource('categories', CategoriesController::class);

/* Route::get('categories', [CategoriesController::class, 'index']);
Route::get('categories/{id}', [CategoriesController::class, 'show']);
Route::post('categories', [CategoriesController::class,'store']);
Route::put('categories/{id}', [CategoriesController::class, 'update']);
Route::delete('categories/{id}', [CategoriesController::class, 'destroy']); */

Route::resource('posts', PostsController::class);

/* Route::get('posts', [PostsController::class, 'index']);
Route::get('posts/{id}', [PostsController::class,'show']);
Route::post('posts', [PostsController::class, 'store']);
Route::put('posts/{id}', [PostsController::class, 'update']);
Route::delete('posts/{id}', [PostsController::class, 'destroy']); */

Route::resource('comments', CommentsController::class);

/* Route::get('comments', [CommentsController::class, 'index']);
Route::get('comments/{id}', [CommentsController::class,'show']);
Route::post('comments', [CommentsController::class,'store']);
Route::put('comments/{id}', [CommentsController::class, 'update']);
Route::delete('comments/{id}', [CommentsController::class, 'destroy']); */
