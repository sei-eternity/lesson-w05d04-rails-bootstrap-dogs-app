$(() => {
  $dogsTable = $('#dogs-table');

  $dogsTable.css('display', 'none');

  setTimeout(() => {
    $('#spin').fadeOut(1000);
    $dogsTable.fadeIn(1000);
  }, 2000);
})