$(window).resize(function(){
  let hClass = $('.navigation-toggle').hasClass('navigation-toggle-active');
  if (hClass == false && $(window).width() >= 769) {
    $('.navigation-toggle').next().show(0);
  }
  else if (hClass == true && $(window).width() < 769) {
    $('.navigation-toggle').next().show(0);
  }
  else if (hClass == false && $(window).width() < 769) {
    $('.navigation-toggle').next().hide(0);
  }
})

$(document).ready(function(){
  $('.goto').click( function(){ // ловим клик по ссылке с классом goto
    let scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});

$('.qfilter-item').click(function(){
  let n = $(this).index();
  $('.qfilter-item').removeClass('qfilter-item-active');
  $(this).addClass('qfilter-item-active');
  if (n > 0) {
    $(this).closest('.catalog').find('.catalog-title, .catalog-list').hide();
    $(this).closest('.catalog').find('.catalog-title:eq(' + (n-1) + '), .catalog-list:eq(' + (n-1) + ')').show();
  }
  else {
    $(this).closest('.catalog').find('.catalog-title, .catalog-list').show();
  }
});

$('.qfilter-item').click(function(){
  let n = $(this).index();
  $('.qfilter-item').removeClass('qfilter-item-active');
  $(this).addClass('qfilter-item-active');
  if (n > 0) {
    $(this).closest('.admin').find('.admin-wrapper').hide();
    $(this).closest('.admin').find('.admin-wrapper:eq(' + (n-1) + ')').show();
  }
  else {
    $(this).closest('.admin').find('.admin-wrapper').show();
  }
});



// Управляет поведением блока ".fileupload" при выборе загружаемого файла

$('.fileupload').find('input').change(function(){

  let uploadBlock = $(this).closest('.fileupload');
  let fileName = $(this).val().replace( "C:\\fakepath\\", '' );

  if (fileName.length > 0) {
    uploadBlock.find('.fileupload-input').attr('title', fileName);
    uploadBlock.find('mark').html(fileName);
    uploadBlock.find('.fileupload-clear').removeAttr('disabled');
  }
  else {
    uploadBlock.find('.fileupload-input').attr('title', 'Файл не выбран');
    uploadBlock.find('mark').html('Файл не выбран');
  }

});

// Управляет поведением блока ".fileupload" при удалении выбранного файла

$('.fileupload').find('.fileupload-clear').click(function(){

  let uploadBlock = $(this).closest('.fileupload');

  uploadBlock.find('input').val('');
  uploadBlock.find('.fileupload-input').attr('title', 'Файл не выбран');
  uploadBlock.find('mark').html('Файл не выбран');
  $(this).attr('disabled', 'disabled');

});
