// inserts CSRF token into all ajax requests
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    }
});

// elements in new-project-modal
var new_proj_modal = document.getElementById("new-proj-modal");
var new_proj_modal_body = (new_proj_modal.getElementsByClassName("modal-body"))[0];
var new_proj_name_input = document.getElementById("new-proj-name");
var new_proj_error_div = (new_proj_modal_body.getElementsByClassName("error-msg"))[0];
var cancel_new_proj_btn = (new_proj_modal.getElementsByClassName("btn-default"))[0];
var create_proj_btn = (new_proj_modal.getElementsByClassName("btn-primary"))[0];
cancel_new_proj_btn.addEventListener("click", reset_new_proj_modal, false);
create_proj_btn.addEventListener("click", store_new_proj, false);

// elements in update-project-modal
var update_proj_modal = document.getElementById("update-proj-modal");
var update_proj_modal_body = (update_proj_modal.getElementsByClassName("modal-body"))[0];
var update_proj_name_input = document.getElementById("update-proj-name");
var update_proj_error_div = (update_proj_modal_body.getElementsByClassName("error-msg"))[0];
var cancel_update_proj_btn = (update_proj_modal.getElementsByClassName("btn-default"))[0];
var save_changes_proj_btn = (update_proj_modal.getElementsByClassName("btn-primary"))[0];
cancel_update_proj_btn.addEventListener("click", load_update_proj_modal, false);
save_changes_proj_btn.addEventListener("click", update_proj, false);

// elements in to-do-panel
var to_do_panel = document.getElementById("to-do-panel");
var to_do_panel_body = (to_do_panel.getElementsByClassName("panel-body"))[0];
var new_to_do_btn = ((to_do_panel.getElementsByClassName("task-header"))[0].getElementsByClassName("btn-primary"))[0];
var new_to_do_panel = (to_do_panel.getElementsByClassName("new-task-panel"))[0];
var new_to_do_input = (new_to_do_panel.getElementsByTagName("input"))[0];
var new_to_do_tick_btn = (new_to_do_panel.getElementsByClassName("btn-default"))[0];
var new_to_do_cross_btn = (new_to_do_panel.getElementsByClassName("btn-default"))[1];
var new_to_do_error_div = (new_to_do_panel.getElementsByClassName("error-msg"))[0];
new_to_do_btn.addEventListener("click", show_new_to_do_field, false);
new_to_do_tick_btn.addEventListener("click", store_new_task, false);
new_to_do_cross_btn.addEventListener("click", hide_new_to_do_field, false);

// elements in in-progress-panel
var in_progress_panel = document.getElementById("in-progress-panel");
var in_progress_panel_body = (in_progress_panel.getElementsByClassName("panel-body"))[0];
var new_in_progress_btn = ((in_progress_panel.getElementsByClassName("task-header"))[0].getElementsByClassName("btn-primary"))[0];
var new_in_progress_panel = (in_progress_panel.getElementsByClassName("new-task-panel"))[0];
var new_in_progress_input = (new_in_progress_panel.getElementsByTagName("input"))[0];
var new_in_progress_tick_btn = (new_in_progress_panel.getElementsByClassName("btn-default"))[0];
var new_in_progress_cross_btn = (new_in_progress_panel.getElementsByClassName("btn-default"))[1];
var new_in_progress_error_div = (new_in_progress_panel.getElementsByClassName("error-msg"))[0];
new_in_progress_btn.addEventListener("click", show_new_in_progress_field, false);
new_in_progress_tick_btn.addEventListener("click", store_new_task, false);
new_in_progress_cross_btn.addEventListener("click", hide_new_in_progress_field, false);

// elements in done-panel
var done_panel = document.getElementById("done-panel");
var done_panel_body = (done_panel.getElementsByClassName("panel-body"))[0];
var new_done_btn = ((done_panel.getElementsByClassName("task-header"))[0].getElementsByClassName("btn-primary"))[0];
var new_done_panel = (done_panel.getElementsByClassName("new-task-panel"))[0];
var new_done_input = (new_done_panel.getElementsByTagName("input"))[0];
var new_done_tick_btn = (new_done_panel.getElementsByClassName("btn-default"))[0];
var new_done_cross_btn = (new_done_panel.getElementsByClassName("btn-default"))[1];
var new_done_error_div = (new_done_panel.getElementsByClassName("error-msg"))[0];
new_done_btn.addEventListener("click", show_new_done_field, false);
new_done_tick_btn.addEventListener("click", store_new_task, false);
new_done_cross_btn.addEventListener("click", hide_new_done_field, false);

// elements in edit-task-modal
var update_task_modal = document.getElementById("update-task-modal");
var update_task_modal_heading = (update_task_modal.getElementsByClassName("modal-title")[0]);
var update_task_name_input = document.getElementById("update-task-name-input");
var update_task_state_select = document.getElementById("update-task-state-select");
var update_task_notes_input = document.getElementById("update-task-notes-input");
var update_task_error_div = (update_task_modal.getElementsByClassName("error-msg"))[0];
var task_updated_info_span = (update_task_modal.getElementsByClassName("updated-at-info"))[0];
var archive_task_btn = (update_task_modal.getElementsByClassName("btn-secondary")[0]);
var delete_task_btn = (update_task_modal.getElementsByClassName("btn-danger")[0]);
var cancel_update_task_btn = (update_task_modal.getElementsByClassName("btn-default")[0]);
var save_changes_task_btn = (update_task_modal.getElementsByClassName("btn-primary")[0]);
archive_task_btn.addEventListener("click", archive_task, false);
delete_task_btn.addEventListener("click", delete_task, false);
cancel_update_task_btn.addEventListener("click", reset_update_task_modal, false);
save_changes_task_btn.addEventListener("click", update_task, false);

// elements in share-modal
var share_modal = document.getElementById('share-modal');
var user_to_share_with_input = document.getElementById('user-to-share-with');
var share_modal_error_div = (share_modal.getElementsByClassName("error-msg"))[0];
var cancel_share_btn = (share_modal.getElementsByClassName("btn-default")[0]);
var confirm_share_btn = (share_modal.getElementsByClassName("btn-primary")[0]);
cancel_share_btn.addEventListener("click", reset_share_modal, false);
confirm_share_btn.addEventListener("click", share_proj, false);

// elements in archives-modal
var archives_modal = document.getElementById("archives-modal");
var archives_modal_body = (archives_modal.getElementsByClassName("modal-body"))[0];
var archives_checkboxes = archives_modal.getElementsByTagName("input");
var archives_cancel_btn = (archives_modal.getElementsByClassName("btn-default"))[0];
var archives_restore_btn = (archives_modal.getElementsByClassName("btn-success"))[0];
archives_cancel_btn.addEventListener("click", reset_archives_modal, false);
archives_restore_btn.addEventListener("click", restore_tasks, false);

// elements in rec-delete-modal
var rec_delete_modal = document.getElementById("rec-delete-modal");
var rec_delete_modal_body = (rec_delete_modal.getElementsByClassName("modal-body"))[0];
var rec_delete_checkboxes = rec_delete_modal.getElementsByTagName("input");
var rec_delete_cancel_btn = (rec_delete_modal.getElementsByClassName("btn-default"))[0];
var rec_delete_restore_btn = (rec_delete_modal.getElementsByClassName("btn-success"))[0];
rec_delete_cancel_btn.addEventListener("click", reset_rec_delete_modal, false);
rec_delete_restore_btn.addEventListener("click", restore_tasks, false);

// miscl elements
var proj_list = (document.getElementsByClassName("nav-stacked"))[0];
var no_proj_heading = document.getElementById("no-proj-div");
var no_proj_create_btn = (no_proj_heading.getElementsByTagName("button"))[0];
var main_div = document.getElementById("main-div");
var proj_heading = document.getElementById("proj-heading");
var options_panel = document.getElementById("options-panel");
var delete_proj_btn = (document.getElementById("delete-proj-modal").getElementsByClassName("btn-danger"))[0];
delete_proj_btn.addEventListener("click", delete_proj, false);

// state variables
var proj_dict = {};
var tasks_dict = {};
var archives_tasks_dict = {};
var rec_delete_tasks_dict = {};
var current_proj_id;

// regular expressions
var proj_id_regex = /proj-([0-9]+)/;
var task_id_regex = /task-([0-9]+)/;
var bump_dir_regex = /glyphicon glyphicon-chevron-([a-z]+)/;

// page-load processes
load_proj_list(load_proj);

// load functions
function load_proj_list(callback, callback_specs) {
    if(callback==null) callback = function(specs){};

    $.ajax({
        type:'POST',
        url:'/load-proj-list',     
        dataType: 'json',
        data: {},
        success: function(response) {
            while (proj_list.firstChild) {
                proj_list.removeChild(proj_list.firstChild);
            }
            for(var p in response) {
                var new_link_element = document.createElement("a");
                new_link_element.appendChild(document.createTextNode(response[p].name));
                new_link_element.setAttribute("id", "proj-"+response[p].id);
                new_link_element.addEventListener("click", load_proj, false);
                var new_proj_item = document.createElement("li");
                new_proj_item.appendChild(new_link_element);
                proj_list.insertBefore(new_proj_item, proj_list.firstChild);
            }
            for(var p in response) {
                proj_dict[response[p].id] = response[p].name;
            }
            
            callback(callback_specs);
        }
    });
}

function load_proj(event) {
    if(!proj_list.firstChild) {
        no_proj_heading.style.display = "block";
        main_div.style.display = "none";
        options_panel.style.display = "none";
    }
    else {
        if(event==null) {
            var match = proj_id_regex.exec(proj_list.firstChild.firstChild.id);
            current_proj_id = parseInt(match[1]);
        }
        else if(typeof event == "number") {
            current_proj_id = parseInt(event);
        }
        else {
            var match = proj_id_regex.exec(event.target.id);
            current_proj_id = parseInt(match[1]);
        }

        no_proj_heading.style.display = "none";
        main_div.style.display = "block";
        options_panel.style.display = "block";

        load_proj_heading();
        load_update_proj_modal();
        load_task_panels();
        // load_archives_modal();
        load_rec_delete_modal();
    }  
}

function load_proj_heading() {
    proj_heading.removeChild(proj_heading.firstChild);

    var proj_heading_span = document.createElement("span");
    proj_heading_span.appendChild(document.createTextNode(proj_dict[current_proj_id]));
    proj_heading.insertBefore(proj_heading_span, proj_heading.firstChild);
}

function load_update_proj_modal() {
    update_proj_name_input.value = proj_dict[current_proj_id];
    while (update_proj_error_div.firstChild) {
        update_proj_error_div.removeChild(update_proj_error_div.firstChild);
    }
}

function load_task_panels() {
    $.ajax({
        type:'POST',
        url:'/load-tasks',     
        dataType: 'json',
        data: {proj_id: current_proj_id},
        success: function(response) {
            while (new_to_do_panel.nextSibling) {
                new_to_do_panel.parentNode.removeChild(new_to_do_panel.nextSibling);
            }
            while (new_in_progress_panel.nextSibling) {
                new_in_progress_panel.parentNode.removeChild(new_in_progress_panel.nextSibling);
            }
            while (new_done_panel.nextSibling) {
                new_done_panel.parentNode.removeChild(new_done_panel.nextSibling);
            }

            var to_do_tasks = [];
            var in_progress_tasks = [];
            var done_tasks = [];

            for(var t in response) {
                if(response[t].state=="To Do") to_do_tasks.push(response[t]);
                else if(response[t].state=="In Progress") in_progress_tasks.push(response[t]);
                else if(response[t].state=="Done") done_tasks.push(response[t]);

                tasks_dict[response[t].id] = response[t];
            }

            for(var t in to_do_tasks) {
                var new_right_chev_icon = document.createElement("i");
                new_right_chev_icon.setAttribute("class", "glyphicon glyphicon-chevron-right");
                var new_right_chev_btn = document.createElement("button");
                new_right_chev_btn.setAttribute("class", "btn btn-default btn-xs");
                new_right_chev_btn.appendChild(new_right_chev_icon);

                var new_btn_group_div = document.createElement("div");
                new_btn_group_div.setAttribute("class", "btn-group pull-right");
                new_btn_group_div.appendChild(new_right_chev_btn); 

                var new_panel_body = document.createElement("div");
                new_panel_body.setAttribute("class", "panel-body");
                new_panel_body.appendChild(new_btn_group_div);
                new_panel_body.appendChild(document.createTextNode(to_do_tasks[t].name));

                var new_panel = document.createElement("div");
                new_panel.setAttribute("class", "panel panel-default task-item");
                new_panel.setAttribute("id", "task-"+to_do_tasks[t].id); 
                new_panel.appendChild(new_panel_body);
                new_panel.addEventListener("click", bump_or_update_task, false);

                insertAfter(new_panel, new_to_do_panel);
            }
            for(var t in in_progress_tasks) {
                var new_left_chev_icon = document.createElement("i");
                new_left_chev_icon.setAttribute("class", "glyphicon glyphicon-chevron-left");
                var new_left_chev_btn = document.createElement("button");
                new_left_chev_btn.setAttribute("class", "btn btn-default btn-xs");
                new_left_chev_btn.appendChild(new_left_chev_icon);

                var new_right_chev_icon = document.createElement("i");
                new_right_chev_icon.setAttribute("class", "glyphicon glyphicon-chevron-right");
                var new_right_chev_btn = document.createElement("button");
                new_right_chev_btn.setAttribute("class", "btn btn-default btn-xs");
                new_right_chev_btn.appendChild(new_right_chev_icon);

                var new_btn_group_div = document.createElement("div");
                new_btn_group_div.setAttribute("class", "btn-group pull-right");
                new_btn_group_div.appendChild(new_left_chev_btn);
                new_btn_group_div.appendChild(new_right_chev_btn);

                var new_panel_body = document.createElement("div");
                new_panel_body.setAttribute("class", "panel-body");
                new_panel_body.appendChild(new_btn_group_div);
                new_panel_body.appendChild(document.createTextNode(in_progress_tasks[t].name));

                var new_panel = document.createElement("div");
                new_panel.setAttribute("class", "panel panel-default task-item");
                new_panel.setAttribute("id", "task-"+in_progress_tasks[t].id); 
                new_panel.appendChild(new_panel_body);
                new_panel.addEventListener("click", bump_or_update_task, false);

                insertAfter(new_panel, new_in_progress_panel);
            }
            for(var t in done_tasks) {
                var new_left_chev_icon = document.createElement("i");
                new_left_chev_icon.setAttribute("class", "glyphicon glyphicon-chevron-left");
                var new_left_chev_btn = document.createElement("button");
                new_left_chev_btn.setAttribute("class", "btn btn-default btn-xs");
                new_left_chev_btn.appendChild(new_left_chev_icon);

                var new_btn_group_div = document.createElement("div");
                new_btn_group_div.setAttribute("class", "btn-group pull-right");
                new_btn_group_div.appendChild(new_left_chev_btn);

                var new_panel_body = document.createElement("div");
                new_panel_body.setAttribute("class", "panel-body");
                new_panel_body.appendChild(new_btn_group_div);
                new_panel_body.appendChild(document.createTextNode(done_tasks[t].name));

                var new_panel = document.createElement("div");
                new_panel.setAttribute("class", "panel panel-default task-item");
                new_panel.setAttribute("id", "task-"+done_tasks[t].id);
                new_panel.appendChild(new_panel_body);
                new_panel.addEventListener("click", bump_or_update_task, false);

                insertAfter(new_panel, new_done_panel);
            }
        }
    });
}

function load_archives_modal() {
    $.ajax({
        type:'POST',
        url:'/load-archived-tasks',     
        dataType: 'json',
        data: {proj_id: current_proj_id},
        success: function(response) {
            while (archives_modal_body.firstChild) {
                archives_modal_body.removeChild(archives_modal_body.firstChild);
            }

            for(var t in response) {
                var new_checkbox = document.createElement("input");
                new_checkbox.setAttribute("type", "checkbox");
                new_checkbox.setAttribute("id", "checkbox-for-"+response[t].id);

                var new_btn_group_div = document.createElement("div");
                new_btn_group_div.setAttribute("class", "btn-group pull-right");
                new_btn_group_div.appendChild(new_checkbox); 

                var new_panel_body = document.createElement("div");
                new_panel_body.setAttribute("class", "panel-body");
                new_panel_body.appendChild(new_btn_group_div);
                new_panel_body.appendChild(document.createTextNode(response[t].name));

                var new_panel = document.createElement("div");
                new_panel.setAttribute("class", "panel panel-default task-item");
                new_panel.setAttribute("id", "task-"+response[t].id); 
                new_panel.appendChild(new_panel_body);

                var new_label = document.createElement("label");
                new_label.setAttribute("for", "checkbox-for-"+response[t].id);
                new_label.appendChild(new_panel);

                archives_modal_body.insertBefore(new_label, archives_modal_body.firstChild);
            }
            for(var t in response) {
                archives_tasks_dict[response[t].id] = response[t];
            }
        }
    });
}

function load_rec_delete_modal() {
    $.ajax({
        type:'POST',
        url:'/load-rec-delete-tasks',     
        dataType: 'json',
        data: {proj_id: current_proj_id},
        success: function(response) {
            while (rec_delete_modal_body.firstChild) {
                rec_delete_modal_body.removeChild(rec_delete_modal_body.firstChild);
            }

            for(var t in response) {
                var new_checkbox = document.createElement("input");
                new_checkbox.setAttribute("type", "checkbox");
                new_checkbox.setAttribute("id", "checkbox-for-"+response[t].id);

                var new_btn_group_div = document.createElement("div");
                new_btn_group_div.setAttribute("class", "btn-group pull-right");
                new_btn_group_div.appendChild(new_checkbox); 

                var new_panel_body = document.createElement("div");
                new_panel_body.setAttribute("class", "panel-body");
                new_panel_body.appendChild(new_btn_group_div);
                new_panel_body.appendChild(document.createTextNode(response[t].name));

                var new_panel = document.createElement("div");
                new_panel.setAttribute("class", "panel panel-default task-item");
                new_panel.setAttribute("id", "task-"+response[t].id); 
                new_panel.appendChild(new_panel_body);

                var new_label = document.createElement("label");
                new_label.setAttribute("for", "checkbox-for-"+response[t].id);
                new_label.appendChild(new_panel);

                rec_delete_modal_body.insertBefore(new_label, rec_delete_modal_body.firstChild);
            }
            for(var t in response) {
                rec_delete_tasks_dict[response[t].id] = response[t];
            }
        }
    });
}

function reset_new_proj_modal() {
    new_proj_name_input.value = "";
    while (new_proj_error_div.firstChild) {
        new_proj_error_div.removeChild(new_proj_error_div.firstChild);
    }
}

function store_new_proj() {
    var new_proj_name = new_proj_name_input.value;

    $.ajax({
        type:'POST',
        url:'/new-proj',     
        dataType: 'json',
        data: {name: new_proj_name},
        success: function(response) {
            reset_new_proj_modal();
            $('#new-proj-modal').modal('hide');
            load_proj_list(load_proj);
        },
        error: function(data) {
            while (new_proj_error_div.firstChild) {
                new_proj_error_div.removeChild(new_proj_error_div.firstChild);
            }

            var response = JSON.parse(data.responseText);

            var error_bar = document.createElement("div");
            error_bar.appendChild(document.createTextNode(response.name));
            error_bar.setAttribute("class", "alert alert-warning");
            new_proj_error_div.appendChild(error_bar);
        }
    });
}

function update_proj() {
    var update_proj_name = update_proj_name_input.value;

    $.ajax({
        type:'POST',
        url:'/update-proj',     
        dataType: 'json',
        data: {id: current_proj_id, name: update_proj_name},
        success: function(response) {
            $('#update-proj-modal').modal('hide');
            load_proj_list(load_proj, current_proj_id);
        },
        error: function(data) {
            while (update_proj_error_div.firstChild) {
                update_proj_error_div.removeChild(update_proj_error_div.firstChild);
            }

            var response = JSON.parse(data.responseText);

            var error_bar = document.createElement("div");
            error_bar.appendChild(document.createTextNode(response.name));
            error_bar.setAttribute("class", "alert alert-warning");
            update_proj_error_div.appendChild(error_bar);
        }
    });
}

// create task functions
function show_new_to_do_field() {
    new_to_do_panel.style.display = "block";
}

function hide_new_to_do_field() {
    reset_new_to_do_field();
    new_to_do_panel.style.display = "none";
}

function reset_new_to_do_field() {
    new_to_do_input.value = "";
    while (new_to_do_error_div.firstChild) {
        new_to_do_error_div.removeChild(new_to_do_error_div.firstChild);
    }
}

function show_new_in_progress_field() {
    new_in_progress_panel.style.display = "block";
}

function hide_new_in_progress_field() {
    reset_new_in_progress_field();
    new_in_progress_panel.style.display = "none";
}

function reset_new_in_progress_field() {
    new_in_progress_input.value = "";
    while (new_in_progress_error_div.firstChild) {
        new_in_progress_error_div.removeChild(new_in_progress_error_div.firstChild);
    }
}

function show_new_done_field() {
    new_done_panel.style.display = "block";
}

function hide_new_done_field() {
    reset_new_done_field();
    new_done_panel.style.display = "none";
}

function reset_new_done_field() {
    new_done_input.value = "";
    while (new_done_error_div.firstChild) {
        new_done_error_div.removeChild(new_done_error_div.firstChild);
    }
}

function store_new_task(event) {
    var new_task_name;
    var new_task_state;
    var active_task_error_div;
    var hide_active_to_do_field;

    if(event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id=="to-do-panel") {
        new_task_name = new_to_do_input.value;
        new_task_state = "To Do";
        active_task_error_div = new_to_do_error_div;
        hide_active_to_do_field = function() {hide_new_to_do_field();};
    }
    else if(event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id=="in-progress-panel") {
        new_task_name = new_in_progress_input.value;
        new_task_state = "In Progress";
        active_task_error_div = new_in_progress_error_div;
        hide_active_to_do_field = function() {hide_new_in_progress_field();};
    }
    else if(event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id=="done-panel") {
        new_task_name = new_done_input.value;
        new_task_state = "Done";
        active_task_error_div = new_done_error_div;
        hide_active_to_do_field = function() {hide_new_done_field();};
    }

    $.ajax({
        type:'POST',
        url:'/new-task',     
        dataType: 'json',
        data: {name: new_task_name, state: new_task_state, proj_id: current_proj_id},
        success: function(response) {
            hide_active_to_do_field();
            load_task_panels();
        },
        error: function(data) {
            while (active_task_error_div.firstChild) {
                active_task_error_div.removeChild(active_task_error_div.firstChild);
            }

            var response = JSON.parse(data.responseText);

            var error_bar = document.createElement("div");
            error_bar.appendChild(document.createTextNode(response.name));
            error_bar.setAttribute("class", "alert alert-warning");
            active_task_error_div.appendChild(error_bar);
        }
    });
}

// update task functions
function bump_or_update_task() {

    var current_task_id;
    if(event.target.className=="panel-body") {
        var match = task_id_regex.exec(event.target.parentNode.id);
        current_task_id = parseInt(match[1]);
        load_update_task_modal(current_task_id);
        $('#update-task-modal').modal('show');
    }
    else if(event.target.tagName=="BUTTON" || event.target.tagName=="I") {
        var bump_dir;
        if(event.target.tagName=="BUTTON") {
            var match = task_id_regex.exec(event.target.parentNode.parentNode.parentNode.id);
            current_task_id = parseInt(match[1]);
            match = bump_dir_regex.exec(event.target.firstChild.className);
            bump_dir = match[1];
        }
        else if(event.target.tagName=="I") {
            var match = task_id_regex.exec(event.target.parentNode.parentNode.parentNode.parentNode.id);
            current_task_id = parseInt(match[1]);
            match = bump_dir_regex.exec(event.target.className);
            bump_dir = match[1];
        }

        if(bump_dir=="left") bump_left_task(current_task_id);
        else if(bump_dir=="right") bump_right_task(current_task_id);
    }
}

function bump_right_task(current_task_id) {
    var current_task_state = tasks_dict[current_task_id].state;

    var state_to_bump_to;
    if(current_task_state=="To Do") state_to_bump_to = "In Progress";
    else if(current_task_state=="In Progress") state_to_bump_to = "Done";

    $.ajax({
        type:'POST',
        url:'/bump-task',     
        dataType: 'json',
        data: {id: current_task_id, new_state: state_to_bump_to},
        success: function(response) {
            load_task_panels();
        }
    });
}

function bump_left_task(current_task_id) {
    var current_task_state = tasks_dict[current_task_id].state;

    var state_to_bump_to;
    if(current_task_state=="In Progress") state_to_bump_to = "To Do";
    else if(current_task_state=="Done") state_to_bump_to = "In Progress";

    $.ajax({
        type:'POST',
        url:'/bump-task',     
        dataType: 'json',
        data: {id: current_task_id, new_state: state_to_bump_to},
        success: function(response) {
            load_task_panels();
        }
    });
}

function load_update_task_modal(current_task_id) {
    update_task_modal_heading.textContent = tasks_dict[current_task_id].name;
    update_task_modal_heading.setAttribute("id", "task-"+current_task_id);
    update_task_name_input.value = tasks_dict[current_task_id].name;
    update_task_state_select.value = tasks_dict[current_task_id].state;
    update_task_notes_input.value = tasks_dict[current_task_id].notes;
    task_updated_info_span.appendChild(document.createTextNode(tasks_dict[current_task_id].updated_at + " by " + tasks_dict[current_task_id].updated_by));
}

function reset_update_task_modal() {
    while (update_task_error_div.firstChild) {
        update_task_error_div.removeChild(update_task_error_div.firstChild);
    }
    while (task_updated_info_span.firstChild) {
        task_updated_info_span.removeChild(task_updated_info_span.firstChild);
    }
}

function archive_task() {

}

function delete_task() {
    var match = task_id_regex.exec(update_task_modal_heading.id);
    current_task_id = parseInt(match[1]); 

    $.ajax({
        type:'POST',
        url:'/delete-task',     
        dataType: 'json',
        data: {id: current_task_id},
        success: function(response) {
            $('#update-task-modal').modal('hide');
            reset_update_task_modal();
            load_task_panels();
            load_rec_delete_modal();
        }
    });
}

function update_task() {
    var match = task_id_regex.exec(update_task_modal_heading.id);
    current_task_id = parseInt(match[1]); 
    var update_task_name = update_task_name_input.value;
    var update_task_state = update_task_state_select.value;
    var update_task_notes = update_task_notes_input.value;
    
    $.ajax({
        type:'POST',
        url:'/update-task',     
        dataType: 'json',
        data: {id: current_task_id, name: update_task_name, state: update_task_state, notes: update_task_notes},
        success: function(response) {
            $('#update-task-modal').modal('hide');
            reset_update_task_modal();
            load_task_panels();
        },
        error: function(data) {
            reset_update_task_modal();

            var response = JSON.parse(data.responseText);

            for (var key in response) {
                var error_bar = document.createElement("div");
                error_bar.appendChild(document.createTextNode(response[key]));
                error_bar.setAttribute("class", "alert alert-warning");
                update_task_error_div.appendChild(error_bar);
            }
            
        }
    });
}

// options panel functions
function reset_share_modal() {
    user_to_share_with_input.value = "";
    while (share_modal_error_div.firstChild) {
        share_modal_error_div.removeChild(share_modal_error_div.firstChild);
    }
}

function share_proj() {
    var user_to_share_with = user_to_share_with_input.value;

    $.ajax({
        type:'POST',
        url:'/share-proj',     
        dataType: 'json',
        data: {proj_id: current_proj_id, email: user_to_share_with},
        success: function(response) {
            reset_share_modal();
            var success_bar = document.createElement("div");
            success_bar.appendChild(document.createTextNode("Shared successfully."));
            success_bar.setAttribute("class", "alert alert-success");
            share_modal_error_div.appendChild(success_bar);
        },
        error: function(data) {
            while (share_modal_error_div.firstChild) {
                share_modal_error_div.removeChild(share_modal_error_div.firstChild);
            }

            var response = JSON.parse(data.responseText);

            var error_bar = document.createElement("div");
            error_bar.appendChild(document.createTextNode(response.email));
            error_bar.setAttribute("class", "alert alert-warning");
            share_modal_error_div.appendChild(error_bar);
        }
    });
}

function reset_archives_modal() {
    for(var c in archives_checkboxes) {
        archives_checkboxes[c].checked = false;
    }
}

function reset_rec_delete_modal() {
    for(var c in rec_delete_checkboxes) {
        rec_delete_checkboxes[c].checked = false;
    }
}

function restore_tasks(event) {
    var tasks_to_restore = [];
    var origin;
    if(event.currentTarget==archives_restore_btn) {
        origin = "Archives";
        for(var c in archives_checkboxes) {
            if(archives_checkboxes[c].checked) {
                var match = task_id_regex.exec(archives_checkboxes[c].parentNode.parentNode.parentNode.id);
                selected_task_id = parseInt(match[1]);
                tasks_to_restore.push(selected_task_id);
            }
        }
    }
    else if(event.currentTarget==rec_delete_restore_btn) {
        origin = "Recently Deleted";
        for(var c in rec_delete_checkboxes) {
            if(rec_delete_checkboxes[c].checked) {
                var match = task_id_regex.exec(rec_delete_checkboxes[c].parentNode.parentNode.parentNode.id);
                selected_task_id = parseInt(match[1]);
                tasks_to_restore.push(selected_task_id);
            }
        }
    }

    

    $.ajax({
        type:'POST',
        url:'/restore-tasks',     
        dataType: 'json',
        data: {tasks: tasks_to_restore},
        success: function(response) {
            if(origin=="Archives") {
                $('#archives-modal').modal('hide');
                load_archives_modal();
            }
            else if(origin=="Recently Deleted") {
                $('#rec-delete-modal').modal('hide');
                load_rec_delete_modal();
            }
            load_task_panels();
        }
    });
}

function delete_proj() {
    $.ajax({
        type:'POST',
        url:'/delete-proj',     
        dataType: 'json',
        data: {id: current_proj_id},
        success: function(response) {
            $('#delete-proj-modal').modal('hide');
            load_proj_list(load_proj);
        }
    });
}

// miscl functions
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}