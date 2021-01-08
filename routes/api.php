<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('/question','App\Http\Controllers\QuestionController');

Route::apiResource('/category','App\Http\Controllers\CategoryController');

Route::apiResource('question/{question}/reply','App\Http\Controllers\ReplyController');

Route::post('like/{reply}','App\Http\Controllers\LikeController@likeIt');

Route::delete('like/{reply}','App\Http\Controllers\LikeController@unLikeIt');


Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::get('/me', 'App\Http\Controllers\AuthController@me');
});