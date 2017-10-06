<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{	
    // returns list of projects for which user is a member
	public function load_list(Request $request) {

        $memberships = DB::table('project_members')->where('user_id', Auth::id())->get();

        $projects_array = array();
        foreach ($memberships as $membership) {
            $project = DB::table('projects')->where('id', $membership->proj_id)->first();
            array_push($projects_array, array(
                'id' => $project->id,
                'name' => htmlentities($project->name, ENT_NOQUOTES)
            ));
        }

    	return response()->json($projects_array);
    }

    // stores a newly created project and makes user a member of it
    public function store(Request $request) {
    	
    	$this->validate($request, [
	        'name' => 'required|unique:projects|max:25'
	    ]);
   		
    	$project = new Project;
    	$project->name = htmlentities($request->name, ENT_NOQUOTES);
    	$project->save();

        DB::table('project_members')->insert(
            [
                'proj_id' => $project->id, 
                'user_id' => Auth::id(), 
                "created_at" =>  \Carbon\Carbon::now(), 
                "updated_at" => \Carbon\Carbon::now()
            ]
        );

    	return response()->json(array(
    		"new_proj_success" => true
		));
    }

    // updates a project's name
    public function update(Request $request) {
    	
    	$this->validate($request, [
	        'name' => 'required|unique:projects|max:25'
	    ]);
   		
    	$project = Project::where('id', $request->id)->first();
    	$project->name = htmlentities($request->name, ENT_NOQUOTES);
    	$project->save();

    	return response()->json(array(
    		"update_proj_success" => true
		));
    }

    // adds a new member to a project
    public function share(Request $request) {

        $memberships = DB::table('project_members')->where('proj_id', $request->proj_id)->get();

        // for ensuring that this new member is not an existing member
        $member_emails = array();
        foreach($memberships as $membership) {
            $email = DB::table('users')->where('id', $membership->user_id)->first()->email;
            array_push($member_emails, $email);
        }

        $validator = Validator::make($request->all(), [
            'email' => [
                'required',
                'email',
                'exists:users,email',
                Rule::notIn($member_emails)
            ]
        ]);

        if ($validator->fails()) {
            return response()->json(
                $validator->getMessageBag()->toArray()
            , 422);
        }

        $user_id = DB::table('users')->where('email', $request->email)->first()->id;

        DB::table('project_members')->insert(
            [
                'proj_id' => $request->proj_id, 
                'user_id' => $user_id, 
                "created_at" =>  \Carbon\Carbon::now(), 
                "updated_at" => \Carbon\Carbon::now()
            ]
        );

        return response()->json(array(
            "share_proj_success" => true
        ));
    }

    // deletes (permanently) a project
    public function delete(Request $request) {
        
        $project = Project::where('id', $request->id)->first();
        $project->delete();

        return response()->json(array(
            "delete_proj_success" => true
        ));
    }
}
