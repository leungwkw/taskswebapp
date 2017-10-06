<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// handles request for welcome page
Route::get('/', function () {
    return view('welcome');
});

// handles login and registration
Auth::routes();

// handles requests for home page
Route::get('/home', 'HomeController@index')->name('home');

// project-related requests
Route::post('/new-proj', 'ProjectController@store');
Route::post('/update-proj', 'ProjectController@update');
Route::post('/load-proj-list', 'ProjectController@load_list');
Route::post('/share-proj', 'ProjectController@share');
Route::post('/delete-proj', 'ProjectController@delete');

// task-related requests
Route::post('/new-task', 'TaskController@store');
Route::post('/load-tasks', 'TaskController@load');
Route::post('/load-rec-delete-tasks', 'TaskController@load_rec_delete');
Route::post('/bump-task', 'TaskController@bump');
Route::post('/delete-task', 'TaskController@delete');
Route::post('/update-task', 'TaskController@update');
Route::post('/restore-tasks', 'TaskController@restore');




