var global = 5;
function lexscope() {
        function consolelog() {
            global = 6;
            console.log(global);
            console.log(global.a);
            console.log(window.global);
        };
    return consolelog();
};
lexscope();