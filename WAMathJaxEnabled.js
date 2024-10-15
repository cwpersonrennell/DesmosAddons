var WAMathJax = WAMathJax || {};
if(WAMathJax.run_complete){}else{
        WAMathJax.iframeFactory=function(){
                function bootstrap(){
                        try{
                                this.contentWindow.Desmos.GraphingCalculator();
                                this.contentWindow.getCalculators();
                                this.height = this.contentWindow.document.body.scrollHeight+30;
                        }catch(err){
                                setTimeout(bootstrap.bind(this),1000);
                        }
                        
                }
                let iframe = document.createElement('iframe');
                iframe.style="min-width:800px;max-width:800px;";
                iframe.src="about:blank";
                iframe.frameBorder=0;
                iframe.width=800;
                iframe.addEventListener('load',bootstrap.bind(iframe));
                return iframe;
        }

        WAMathJax.addScriptsToBody=function(scripts, body, doc){
                for(let i = 0; i<scripts.length;i++){
                        let script = doc.createElement("script");
                        script.src = scripts[i];
                        script.async = true;
                        body.append(script);
                }
        }

        WAMathJax.loadUserContent=function(template){
                const usercontent = template.content.cloneNode(true);
                const iframe = WAMathJax.iframeFactory();
                const target = template.parentElement;
                target.append(iframe);
                const doc = iframe.contentDocument;
                const body = doc.createElement('body');
                let scripts = [
                        "https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6",
                        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
                        "https://cwpersonrennell.github.io/DesmosAddons/DesmosAddons.js",
                        "https://cwpersonrennell.github.io/DesmosAddons/hide.js",
                        "https://cwpersonrennell.github.io/Math/WA.js"
                        ];
                WAMathJax.addScriptsToBody(scripts,body,doc);
                body.append(usercontent);
                body.style.setProperty('max-width','805px');
                body.style.setProperty('overflow-x','clip');
                doc.body=body;  
        }

        WAMathJax.run_complete=true;
        WAMathJax.DOMComplete = false;


        document.addEventListener("DOMContentLoaded", () => {
                if(WAMathJax.DOMComplete) return;
                WAMathJax.DOMComplete = true;

                let templates = document.querySelectorAll("#WAMathJax");
                for(template of templates){
                        WAMathJax.loadUserContent(template);
                }
        });
}


