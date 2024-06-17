import { debounce } from "../utils/common";

export default class CodePage {
  constructor(el) {
    this.el = el;
    this.pageTitle = "";
    this.id = undefined;
  }

  componentMounted() {
    this.htmlCode = document.querySelector("#htmlCode");
    this.cssCode = document.querySelector("#cssCode");
    this.jsCode = document.querySelector("#jsCode");
    this.previewFrame = document.querySelector("#resultIframe");

    this.pageTitleEl = document.querySelector("#pageTitle");

    const onDelayChange = debounce((e) => {
      //   console.log(e.target.value);
      this.executeCode();
    }, 250);

    [this.htmlCode, this.cssCode, this.jsCode].forEach((code) => {
      code.addEventListener("keyup", onDelayChange);
    });
  }
  executeCode() {
    const iFDocument = this.previewFrame.contentDocument;
    const h = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                ${this.cssCode.value}

            </style>
        </head>
        <body>
            ${this.htmlCode.value}

            <script type="text/javascript">
                ${this.jsCode.value}

            </script>
        </body>
    </html>
    `;

    iFDocument.open();
    iFDocument.write(h);
    iFDocument.close();
  }

  render() {
    let h = `
        <div class="app-area" data-app>
            <div class="code-area-container animate__animated animate__swing">
                <div class="code-area code-area-html">
                    <h4 class="code-title">HTML</h4>
                    <div>
                    <textarea id="htmlCode" rows="10">
                        <h1>Welcome</h1>
                        </textarea
                    >
                    </div>
                </div>
        
                <div class="code-area code-area-css">
                    <h4 class="code-title">CSS</h4>
                    <div>
                    <textarea id="cssCode" rows="10"></textarea>
                    </div>
                </div>
            
                <div class="code-area code-area-js">
                    <h4 class="code-title">JAVASCRIPT</h4>
                    <div>
                    <textarea id="jsCode" rows="10"></textarea>
                    </div>
                </div>
            </div>

            <div id="resize-preview" class="resizer" data-direction="horizontal"></div>

            <div class="code-preview animate__animated animate__zoomIn">
                <h4>PREVIEW</h4>
                <iframe id="resultIframe"></iframe>
            </div>
        </div>
  
    `;
    document.querySelector(this.el).innerHTML = h;
    this.componentMounted();
    return this;
  }
}
