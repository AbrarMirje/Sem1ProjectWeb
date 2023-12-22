document.querySelectorAll('.order-now').forEach(function (element) {
    element.addEventListener('click', function () {
        Swal.fire({
            title: "Order Successful!",
            text: "Enjoy the Meal!",
            icon: "success"
        });
    });
});
