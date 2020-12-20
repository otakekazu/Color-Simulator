(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('dropdown_btn');
        if(btn) {
            btn.addEventListener('click', function(){
                this.classList.toggle('is-open');
            });
        }
    });
}());

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('shape1_btn');
        if(btn) {
            btn.addEventListener('click', function(){
                const btn_name = document.getElementById('dropdown_btn');
                const shape1 = document.getElementById('shape1');
                const shape2 = document.getElementById('shape2');
                const colorChange_btn_shape1 = document.getElementById('colorChange_btn_shape1');
                const colorChange_btn_shape2 = document.getElementById('colorChange_btn_shape2');
                if(shape1.classList.contains('shape-hidden')){
                    shape1.classList.remove('shape-hidden');
                    shape2.classList.add('shape-hidden');
                    colorChange_btn_shape1.classList.remove('shape-hidden');
                    colorChange_btn_shape2.classList.add('shape-hidden');
                }
                btn_name.textContent = "SHAPE1";
            });
        }
    });
}());

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('shape2_btn');
        if(btn) {
            btn.addEventListener('click', function(){
                const btn_name = document.getElementById('dropdown_btn');
                const shape1 = document.getElementById('shape1');
                const shape2 = document.getElementById('shape2');
                const colorChange_btn_shape1 = document.getElementById('colorChange_btn_shape1');
                const colorChange_btn_shape2 = document.getElementById('colorChange_btn_shape2');
                if(shape2.classList.contains('shape-hidden')){
                    shape2.classList.remove('shape-hidden');
                    shape1.classList.add('shape-hidden');
                    colorChange_btn_shape2.classList.remove('shape-hidden');
                    colorChange_btn_shape1.classList.add('shape-hidden');
                }
                btn_name.textContent = "SHAPE2";
            });
        }
    });
}());


    function changeLogo(){
        const logo = document.getElementById('logo');
        const logo_radio1 = document.getElementById('logo_radio1');
        const logo_radio2 = document.getElementById('logo_radio2');
        const logo_radio3 = document.getElementById('logo_radio3');

        if(logo_radio1.checked){
            logo.classList.remove('logo-pos2');
            logo.classList.remove('logo-pos3');
            logo.classList.add('logo-pos1');
        }

        if(logo_radio2.checked){
            logo.classList.remove('logo-pos1');
            logo.classList.remove('logo-pos3');
            logo.classList.add('logo-pos2');
        }

        if(logo_radio3.checked){
            logo.classList.remove('logo-pos1');
            logo.classList.remove('logo-pos2');
            logo.classList.add('logo-pos3');
        }
    }
