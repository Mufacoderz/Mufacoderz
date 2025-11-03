import * as esbuild from "https://unpkg.com/esbuild-wasm@0.17.19/esm/browser.min.js";

        async function runTS() {
            await esbuild.initialize({ wasmURL: "https://unpkg.com/esbuild-wasm@0.17.19/esbuild.wasm" });
            const tsCode = await fetch("./main.ts").then(r => r.text());
            const result = await esbuild.transform(tsCode, { loader: "ts" });

            const script = document.createElement("script");
            script.type = "module";
            script.textContent = result.code;
            document.body.appendChild(script);
        }

        runTS();