$(() => {
  $('.person-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('unfollow');
  });
});
