$(function() {
    //執行 getData();
        getData();
        
        //定義 getData Function
        function getData(){
            $.getJSON('data.json', function(data) {
                
                //取得 json 取得所有的 dataset
                wishes = data.dataset;
                
                //取得 wish 數量
                var length = wishes.length;
    //在前台呈現所有的 wish
                for( var i = length; i >0; i-- ){
                    $('.wish-pool').append('
    '+wishes[i-1]+'
    ');
                }
            });
        };
    });
    $(document).ready(function() {	
        //Click Wish Button to Save
        $('#wish-btn').click(function(){
            saveData();
        });
        
        // 定義 savedata 的動作，
        function saveData(){
            
            //如果 giftname 空白不能送出
            if ( $('#giftname').val() == '') {
                alert('Please Write A Gift');
            } else {
                
                //取得新願望 並塞到前台。
                var newWish = $('#giftname').val();
                newWish = escapeHtml(newWish); // 2014.09.19 更新，用於替換一些符號;
            
                //把data 存回去
                $.ajax({  
                    url: "addData.php",  
                    type: "POST",
                    data: { wish : newWish },
                    success: function(data){
                        if ( data == '1'){
                            alert('哎呀，好像有什麼東西出錯啦，請稍後再試。');
                        } else {
                            // do something if success 
                        }
                        $('#giftname').val(''); //清空input
                    } 
                });  
            }
        };
    });
    