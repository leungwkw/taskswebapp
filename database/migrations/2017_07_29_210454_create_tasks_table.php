<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->enum('state', ['To Do', 'In Progress', 'Done']);
            $table->text('notes')->nullable();
            $table->unsignedInteger('proj_id');
            $table->timestamps();
            $table->unsignedInteger('updated_by');
            // all a project's tasks will be deleted when the project is deleted
            $table->foreign('proj_id')->references('id')->on('projects')->onDelete('cascade'); 
            $table->foreign('updated_by')->references('id')->on('users');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
