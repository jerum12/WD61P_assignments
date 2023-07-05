<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories',[CategoriesController::class, 'index']);
Route::get('/categories/{id}',[CategoriesController::class, 'show']);
Route::post('/categories',[CategoriesController::class, 'store']);
Route::put('/categories/{id}',[CategoriesController::class, 'update']);
Route::delete('/categories/{id}',[CategoriesController::class, 'destroy']);

Route::get('/post', [PostController::class, 'index']);
Route::get('/post/{id}', [PostController::class, 'show']);
Route::post('/post', [PostController::class, 'store']);
Route::put('/post/{id}', [PostController::class, 'update']);
Route::delete('/post/{id}', [PostController::class, 'destroy']);

Route::get('/comment',[CommentController::class, 'index']);
Route::get('/comment/{id}',[CommentController::class, 'show']);
Route::post('/comment',[CommentController::class, 'store']);
Route::put('/comment/{id}',[CommentController::class, 'update']);
Route::delete('/comment/{id}',[CommentController::class, 'destroy']);