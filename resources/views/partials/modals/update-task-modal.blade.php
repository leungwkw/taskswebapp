<div class="modal fade" id="update-task-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Task Name</h4>
            </div>

            <div class="modal-body">
            
                <form>
                    <div class="form-group">
                        <label for="update-task-name-input" class="control-label">Name:</label>
                        <input type="text" class="form-control" id="update-task-name-input">
                    </div>

                    <div class="form-group">
                        <label for="update-task-state-select" class="control-label">State:</label>
                        <select class="form-control" id="update-task-state-select">
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="update-task-notes-input" class="control-label">Notes:</label>
                        <textarea class="form-control" rows="5" id="update-task-notes-input"></textarea>
                    </div>
                </form>

                <div class="error-msg"></div>

                <p class="updated-at-sect"><em>Updated at:<br><span class="updated-at-info"></span></em></p>

                <button type="button" class="btn btn-secondary btn-block">Archive</button>
                <button type="button" class="btn btn-danger btn-block">Delete</button>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Save Changes</button>
            </div>

        </div>
    </div>
</div>