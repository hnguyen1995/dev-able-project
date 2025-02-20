$(document).ready(function() {
    console.log("Page Loaded");

    $('#ideaForm').submit(function(e) {
        e.preventDefault();
        let title = $('#ideaTitle').val();
        let description = $('#ideaDescription').val();
        console.log("New Idea Submitted:", title, description);
    });
});

$(function() {
    $(".content-list").sortable(); // Make the list sortable
});