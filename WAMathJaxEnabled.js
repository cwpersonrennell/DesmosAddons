document.addEventListener("DOMContentLoaded", () => {
        console.log("WAMathJaxEnabled.js is loaded and running");
        const iframe = document.createElement('iframe');
        iframe.style="min-width:800px;max-width:800px;";
        iframe.src="about:blank";
        const usercontent = document.querySelector("#WAMathJax").content.cloneNode(true);
        iframe.frameBorder=0;
        iframe.width=800;
        function bootstrap(){
                //console.log("bootstrap");
                try{
                        //console.log("iFrame load calculators");
                        iframe.contentWindow.Desmos.GraphingCalculator();
                        iframe.contentWindow.getCalculators();
                        //console.log(iframe.contentWindow.document.body);
                        iframe.height = iframe.contentWindow.document.body.scrollHeight+30;
                }catch(err){
                        //console.log(err);
                        //console.log(iframe.contentWindow);
                        setTimeout(bootstrap,1000);
                }
                
        }
        
        iframe.addEventListener('load',bootstrap);
        let target = document.getElementById("target");
        target.append(iframe);
        //document.body.append(iframe);
        
        const doc = iframe.contentDocument;
        const body = doc.createElement('body');
        let scripts = [
"https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6",
                'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
                "https://cwpersonrennell.github.io/DesmosAddons/DesmosAddons.js",
                "https://cwpersonrennell.github.io/DesmosAddons/hide.js"
                ];
        
        for(let i = 0; i<scripts.length;i++){
                let script = doc.createElement("script");
                script.src = scripts[i];
                script.async = true;
                body.append(script);
        }
        body.append(usercontent);
        body.style.setProperty('max-width','800px');
        body.style.setProperty('overflow-x','clip');
        doc.body=body;      
});
