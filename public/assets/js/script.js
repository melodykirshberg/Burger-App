
$('#addBurger').on('submit', function (event) {
    const newBurger = {
        burger_name: $('#burgerName').val().trim()
    };

    $.ajax({
        url: '/api/burgers',
        type: 'POST',
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
});

$('.devour-button').on('click', function (event) {
    const id = $(this).data('id');
    $.ajax({
        url: '/api/burgers',
        type: 'PUT',
        data: { id }
    }).then(
        function () {
            location.reload();
        }
    );
});

$('.delete-button').on('click', function (event) {
    const id = $(this).data('id');
    $.ajax({
        url: '/api/burgers',
        type: 'DELETE',
        data: { id }
    }).then(
        function () {
            location.reload();
        }
    );
});