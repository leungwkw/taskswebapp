<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectMembersTable extends Migration
{
    protected $primaryKey = ['proj_id','user_id'];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_members', function (Blueprint $table) {
            $table->unsignedInteger('proj_id');
            $table->unsignedInteger('user_id');
            $table->timestamps();
            $table->primary(array('proj_id', 'user_id'));
            // all a project's memberships will be deleted when the project is deleted
            $table->foreign('proj_id')->references('id')->on('projects')->onDelete('cascade');
            // all a user's project memberships will be deleted when the user is deleted 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_members');
    }

    
}
