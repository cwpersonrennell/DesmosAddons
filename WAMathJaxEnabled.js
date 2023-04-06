document.addEventListener("DOMContentLoaded", () => {
        const iframe = document.createElement('iframe');
        iframe.src="about:blank";
        const usercontent = document.querySelector("#WAMathJax").content.cloneNode(true);
        iframe.style=usercontent.style;
        iframe.frameBorder=0;
        let content = document.createElement('div');
        content.innerHTML=usercontent.innerHTML;
        let source = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';

        iframe.width=800;

        iframe.height=usercontent.clientHeight*1.5;
        let target = document.getElementById("target");
        target.append(iframe);
        
        const doc = iframe.contentDocument;
        
        let scripts = [
                'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
                "https://cwpersonrennell.github.io/DesmosAddons/DesmosAddons.js",
                "https://cwpersonrennell.github.io/DesmosAddons/hide.js",
                ];
        
        for(let i = 0; i<scripts.length;i++){
                let script = doc.createElement("script");
                script.src = scripts[i];
                script.async = true;
                content.append(script);
        }
        
        const body = doc.createElement('body');
        body.append(content);
        doc.body=body;
          
});
