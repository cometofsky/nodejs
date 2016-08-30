$(document).ready(function(){

  $('form').on('submit', function(){
    

      var item = $('form input'),
          todo = {item: item.val()};

      jQuery.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          var liItem = "<li data-id='" + data._id + "'>" + data.item + "</li>";

          $("input[name='item']").val('');
          $("#list-todo").append(liItem);
        }
      });

      return false;

  });

  $('ul').on('click', 'li', function(){
      

      var $this = $(this);
      var item = $this.data('id');
      console.log(item);


      jQuery.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          $this.remove();
        }
      });


  });

});