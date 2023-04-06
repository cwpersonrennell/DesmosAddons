document.addEventListener("DOMContentLoaded", () => {
        const iframe = document.createElement('iframe');
        iframe.src="about:blank";
        const usercontent = document.querySelector("#WAMathJax").content.cloneNode(true);
        iframe.frameBorder=0;
        iframe.width=800;
        iframe.onload=function(){
                try{
                        console.log("iFrame load calculators");
                        this.contentWindow.getCalculators();
                }catch(err){
                        console.log(err);
                        console.log(this);
                        console.log(document);
                }};
        let target = document.getElementById("target");
        target.append(iframe);
        
        const doc = iframe.contentDocument;
        const body = doc.createElement('body');
        let scripts = [
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
        doc.body=body;      
});
