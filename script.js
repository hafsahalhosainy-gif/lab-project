function showExp(id) {
    // الاول نخفي كل التجارب
    var experiments = document.getElementsByClassName('experiment');
    for (var i = 0; i < experiments.length; i++) {
        experiments[i].style.display = 'none';
    }

    // بعدين نظهر التجربة اللي دوستي عليها
    var selectedExp = document.getElementById(id);
    if (selectedExp) {
        selectedExp.style.display = 'block';
        // ننزل تلقائي عند التجربة
        selectedExp.scrollIntoView({ behavior: 'smooth' });
    }
}