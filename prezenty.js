/**
 * Created by Kuba on 11/26/2016.
 */
$(document).ready(function(e) {

    $("input").change(function() {
        var ez = 0;

        $("input[name=Tato]").each(function () {
            ez = ez + parseInt($(this).val());

        });
        $("input[name=tato_Suma]").val(ez);
    });
});