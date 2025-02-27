(function () {
    const monkeyPatch = () => {
        let oldXHROpen = window.XMLHttpRequest.prototype.open;
        window.XMLHttpRequest.prototype.open = function () {
            this.addEventListener("load", function () {
                try {
                    // try parsing the response, correct if works
                    const responseBody = this.response.replace('/*""*/', '');
                    parsedRespone = JSON.parse(responseBody);
                    if (parsedRespone.d) {
                        var data = parsedRespone.d.substr(4);

                        document.getElementById('newDataHolder').setAttribute('newData', data);
                    }
                } catch (e) {
                    // not the required response
                    // pass
                }
            });
            return oldXHROpen.apply(this, arguments);
        };
    };
    monkeyPatch();
})();


// This script can be used to inject additional functionality if needed.
// console.log("Injected script loaded!");