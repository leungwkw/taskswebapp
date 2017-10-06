<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    // loads all the tasks for a given project
	public function load(Request $request) {

    	$tasks = Task::where('proj_id', $request->proj_id)
    				->orderBy('state')
    				->get();

   		$tasks_array = array();
   		foreach ($tasks as $task) {
		    array_push($tasks_array, array(
		    	'id' => $task->id,
				'name' => htmlentities($task->name, ENT_NOQUOTES),
				'state' => $task->state,
				'notes' => htmlentities($task->notes, ENT_NOQUOTES),
                'updated_at' => $task->updated_at->toDayDateTimeString(),
                'updated_by' => DB::table('users')->where('id', $task->updated_by)->first()->name
			));
		}

    	return response()->json($tasks_array);
    }

    // loads all the recently (soft) deleted tasks for a given project
    public function load_rec_delete(Request $request) {

    	$tasks = Task::onlyTrashed()
    				->where('proj_id', $request->proj_id)
    				->orderBy('deleted_at')
    				->get();

   		$tasks_array = array();
   		foreach ($tasks as $task) {
		    array_push($tasks_array, array(
		    	'id' => $task->id,
				'name' => htmlentities($task->name, ENT_NOQUOTES),
				"state" => $task->state,
				"notes" => htmlentities($task->notes, ENT_NOQUOTES)
			));
		}

    	return response()->json($tasks_array);
    }

    // stores a newly created task
    public function store(Request $request) {
    	
    	$this->validate($request, [
	        'name' => 'required|max:50'
	    ]);
   		
    	$task = new Task;
    	$task->name = htmlentities($request->name, ENT_NOQUOTES);
    	$task->state = $request->state;
    	$task->proj_id = $request->proj_id;
        $task->updated_by = Auth::id();
    	$task->save();

    	return response()->json(array(
    		"new_task_success" => true
		));
    }

    // updates a task's state
    public function bump(Request $request) {
    	
    	$task = Task::where('id', $request->id)->first();
    	$task->state = $request->new_state;
        $task->updated_by = Auth::id();
    	$task->save();

    	return response()->json(array(
    		"bump_task_success" => true
		));
    }

    // (soft) deletes a task
    public function delete(Request $request) {
    	
    	$task = Task::where('id', $request->id)->first();
        $task->updated_by = Auth::id();
    	$task->delete();

    	return response()->json(array(
    		"delete_task_success" => true
		));
    }

    // updates a task
    public function update(Request $request) {

    	$this->validate($request, [
	        'name' => 'required|max:50',
	        'notes' => 'max:65535'
	    ]);
    	
    	$task = Task::where('id', $request->id)->first();
    	$task->name = htmlentities($request->name, ENT_NOQUOTES);
    	$task->state = $request->state;
    	$task->notes = htmlentities($request->notes, ENT_NOQUOTES);
        $task->updated_by = Auth::id();
    	$task->save();

    	return response()->json(array(
    		"update_task_success" => true
		));
    }

    // restores a (soft) deleted task
    public function restore(Request $request) {
    	
    	foreach($request->tasks as $task_id) {
    		$task = Task::onlyTrashed()->where('id', $task_id)->first();
            $task->updated_by = Auth::id();
	    	$task->restore();
    	}

    	return response()->json(array(
    		"restore_tasks_success" => true
		));
    }
}
