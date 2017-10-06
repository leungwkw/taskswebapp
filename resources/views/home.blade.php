@extends('layouts.app')

@section('customstyles')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container">
       <div class="row">

            @include('partials.proj-panel')
            @include('partials.no-proj-heading')

            <div class="col-md-9" id="main-div">

            @include('partials.proj-heading')

                <!-- to-do panel -->
                <div class="col-md-4"> 
                    <div class="panel panel-default" id="to-do-panel">
                        <div class="panel-heading task-header">
                            To Do
                            <button class="btn btn-xs btn-primary pull-right"><i class="glyphicon glyphicon-plus"></i></button>
                        </div>
                        <div class="panel-body">
                            <div class="panel panel-default new-task-panel"><div class="panel-body">
                                <div class="btn-group pull-right">
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-ok"></i></button>
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-remove"></i></button>
                                </div>
                                <input type="text" placeholder="New task">  
                                <div class="error-msg"></div> 
                            </div></div>
                        </div>
                    </div>
                </div>

                <!-- in-progress panel -->
                <div class="col-md-4">  
                    <div class="panel panel-default" id="in-progress-panel">
                        <div class="panel-heading task-header">
                            In Progress
                            <button class="btn btn-xs btn-primary pull-right"><i class="glyphicon glyphicon-plus"></i></button>
                        </div>
                        <div class="panel-body">
                            <div class="panel panel-default new-task-panel"><div class="panel-body">
                                <div class="btn-group pull-right">
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-ok"></i></button>
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-remove"></i></button>
                                </div>
                                <input type="text" placeholder="New task">  
                                <div class="error-msg"></div> 
                            </div></div>
                        </div>
                    </div>
                </div>

                <!-- done panel -->
                <div class="col-md-4">  
                    <div class="panel panel-default" id="done-panel">
                        <div class="panel-heading task-header">
                            Done
                            <button class="btn btn-xs btn-primary pull-right"><i class="glyphicon glyphicon-plus"></i></button>
                        </div>
                        <div class="panel-body">
                            <div class="panel panel-default new-task-panel"><div class="panel-body">
                                <div class="btn-group pull-right">
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-ok"></i></button>
                                    <button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-remove"></i></button>
                                </div>
                                <input type="text" placeholder="New task">  
                                <div class="error-msg"></div> 
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>

            @include('partials.options-panel')

        </div>
    </div>

    <!-- various modals -->
    @include('partials.modals.new-proj-modal')
    @include('partials.modals.update-proj-modal')
    @include('partials.modals.update-task-modal')
    @include('partials.modals.share-modal')
    @include('partials.modals.archives-modal')
    @include('partials.modals.rec-delete-modal')
    @include('partials.modals.delete-proj-modal')
@endsection

@section('customscripts')
    <script src="{{ asset('js/projects.js') }}"></script>
@endsection
