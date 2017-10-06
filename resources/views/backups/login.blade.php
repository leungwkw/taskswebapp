@extends ("layout")

@section ("content")
	<div class="subcontainer-center"><div class="site-entry-div">
		<form method="POST" action="/">
			{{ csrf_field() }}

			<div class="form-group">
				<label for="email" class="form-label">Email:</label>
				<input type="email" class="form-control" id="email" name="email" required>
			</div>

			<div class="form-group">
				<label for="password" class="form-label">Password:</label>
				<input type="password" class="form-control" id="password" name="password" required>
			</div>		

			<div class="form-group">
				<button type="submit" class="btn-primary">Login</button>
			</div>
		</form>

		<form method="GET" action="/register">
			<div class="form-group">
				<button type="submit" class="btn-primary">Register</button>
			</div>
		</form>

		@include ("partials.errors")
	</div></div>
@endsection