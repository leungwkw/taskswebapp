<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
	use SoftDeletes;
	protected $dates = ['deleted_at'];

	// maps a task to its project
    public function project() {
        return $this->belongsTo('App\Project');
    }
}
