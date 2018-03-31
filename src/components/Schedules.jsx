import React from 'react';

export default class Schedules extends React.Component {
	render() {
		return (
			<div>

				<div className="row m-4 justify-content-center">
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
					<div className="h4">Upcoming Courses</div>
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
				</div>

				<div className="row mb-4 justify-content-center">
					<div className="col">
						<table className="table table-sm table-striped">
							<thead>
							<tr>
								<th scope="col">Day</th>
								<th scope="col">Time</th>
								<th scope="col">Group</th>
								<th scope="col">Meeting Place</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">Monday 16th April to Monday 21st May</th>
								<td>19:30</td>
								<td>Beginners Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							<tr>
								<th scope="row">Monday 16th April to Monday 21st</th>
								<td>19:30</td>
								<td>Improvers Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							<tr>
								<th scope="row">Tuesday 17th April to Tuesday 22nd May</th>
								<td>19:30</td>
								<td>10k Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							<tr>
								<th scope="row">Thursday 19th April to Thursday 24th</th>
								<td>09:30</td>
								<td>Beginners Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							<tr>
								<th scope="row">Thursday 19th April to Thursday 24th May</th>
								<td>09:30</td>
								<td>Improvers Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							<tr>
								<th scope="row">Thursday 19th April to Thursday 24th May</th>
								<td>19:30</td>
								<td>Beginner Course</td>
								<td>Horsham Park, North Parade Car Park, Horsham</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}



