@extends ("layout")

@section ("content")
	<div class="subcontainer-center"><div class="site-entry-div">
		<form method="POST" action="/register">
			{{ csrf_field() }}

			<div class="form-group">
				<label for="name" class="form-label">Name:</label>
				<input type="text" class="form-control" id="name" name="name" required>
			</div>

			<div class="form-group">
				<label for="email" class="form-label">Email:</label>
				<input type="email" class="form-control" id="email" name="email" required>
			</div>

			<div class="form-group">
				<label for="password" class="form-label">Password:</label>
				<input type="password" class="form-control" id="password" name="password" required>
			</div>

			<div class="form-group">
				<label for="password_confirmation" class="form-label">Retype Password:</label>
				<input type="password" class="form-control" id="password_confirmation" name="password_confirmation" required>
			</div>

			<div class="form-group">
				<button type="submit" class="btn btn-primary">Register</button>
			</div>

			@include ("partials.errors")
		</form>
	</div></div>
@endsection