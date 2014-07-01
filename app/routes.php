<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/user', function(){
	return "users list "; 
});

Route::get('/user/{user_id}', function($user_id){
	
	$validation = Validator::make(
		array('user_id' => $user_id),
		array('user_id' => 'required|integer')
	); 

	if($validation->fails()) return "user id is incorrect "; 
	
	return  "are you looking for user with id " . $user_id;  
});
