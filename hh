    function doMath() {


        var my_input1 = document.getElementsByClassName('sumaTato');
        var count = 0;
        for (var i = 0; i < my_input1.length; i++) {

            count = count + parseInt(my_input1[i].value);
        }
        console.log(document.getElementById("zsumowaneT").value = count);

    }
