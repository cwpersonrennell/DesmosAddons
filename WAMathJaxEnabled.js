document.addEventListener("DOMContentLoaded", () => {
        getCalculators();
        const iframe = document.createElement('iframe');
        iframe.src="about:blank";
        const question = document.getElementById("WAMathJax");
        iframe.style=question.style;
        iframe.frameBorder=0;
        let content = document.createElement('div');
        content.innerHTML=question.innerHTML;
        let source = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';

        iframe.width=800;

        iframe.height=question.clientHeight*1.5;
        question.innerHTML="";
        question.append(iframe);
        const doc = iframe.contentDocument;
        
        let mjax = doc.createElement("script");
        mjax.src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        mjax.async=true;
        content.append(mjax);
        const body = doc.createElement('body');
        body.append(content);
        doc.body=body;
       
        
}
