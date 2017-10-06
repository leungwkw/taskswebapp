<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
	// maps a project to its members
    public function users() {
    	return $this->belongsToMany('App\User', 'project_members', 'id', 'id')->withTimestamps();
    }

    // maps a project to its tasks
    public function tasks() {
        return $this->hasMany('App\Task');
    }
}
