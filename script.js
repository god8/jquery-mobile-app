$(document).one('pageinit',function(){
	showRuns();
$('#submitAdd').on('tap', addRun);

function showRuns(){
	
	var runs = getRunsObject();
	
	if(runs != '' && runs != null){
		for(var i = 0;i < runs.length;i++){
			$('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong>'+runs[i]["date"]+
	        ' <br><strong>Distance: </strong>'+runs[i]["miles"]+'m<div class="controls">' +
			'<a href="#edit">Edit</a> | <a href="#">Delete</a></li>');
		}
		$('#home').bind('pageinit', function(){
			$('#stats').listview('refresh');

	});
	}
}
function addRun(){
var miles = $('#addMiles').val();
var date = $('#addDate').val();

var run = {
	date: date,
	miles: parseFloat(miles)
};

var runs = getRunsObject();
runs.push(run);
alert('Run Added');

localStorage.setItem('runs', JSON.stringify(runs));

window.location.href="index.html";
return false;

}

function getRunsObject(){
	var runs = new Array();
	var currentRuns = localStorage.getItem('runs');
	
	if(currentRuns != null){
		var runs = JSON.parse(currentRuns);
}

return runs.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
}
});