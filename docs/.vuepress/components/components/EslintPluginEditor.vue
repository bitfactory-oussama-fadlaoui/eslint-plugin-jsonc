<template>
  <eslint-editor
    ref="editor"
    :linter="linter"
    :config="config"
    :code="code"
    class="eslint-code-block"
    :language="language"
    :filename="fileName"
    :dark="dark"
    :format="format"
    :fix="fix"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
  />
</template>

<script>
import EslintEditor from "vue-eslint-editor";
import { Linter } from "eslint/lib/linter";
import plugin from "../../../..";

export default {
  name: "EslintPluginEditor",
  components: { EslintEditor },
  model: {
    prop: "code",
  },
  props: {
    code: {
      type: String,
      default: "",
    },
    fix: {
      type: Boolean,
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
    dark: {
      type: Boolean,
    },
    language: {
      type: String,
      default: "json",
    },
    fileName: {
      type: String,
      default: "a.json",
    },
    parser: {
      type: String,
      default: "jsonc-eslint-parser",
    },
  },

  data() {
    return {
      jsoncESLintParser: null,
      vueESLintParser: null,
      format: {
        insertSpaces: true,
        tabSize: 2,
      },
    };
  },

  computed: {
    config() {
      return {
        globals: {
          // ES2015 globals
          ArrayBuffer: false,
          DataView: false,
          Float32Array: false,
          Float64Array: false,
          Int16Array: false,
          Int32Array: false,
          Int8Array: false,
          Map: false,
          Promise: false,
          Proxy: false,
          Reflect: false,
          Set: false,
          Symbol: false,
          Uint16Array: false,
          Uint32Array: false,
          Uint8Array: false,
          Uint8ClampedArray: false,
          WeakMap: false,
          WeakSet: false,
          // ES2017 globals
          Atomics: false,
          SharedArrayBuffer: false,
        },
        rules: this.rules,
        parser: this.parser,
        parserOptions: {
          sourceType: "script",
          ecmaVersion: 2021,
        },
      };
    },
    linter() {
      if (!this.jsoncESLintParser || !this.vueESLintParser) {
        return null;
      }
      const linter = new Linter();
      linter.defineParser("jsonc-eslint-parser", this.jsoncESLintParser);
      linter.defineParser("vue-eslint-parser", this.vueESLintParser);

      for (const k of Object.keys(plugin.rules)) {
        const rule = plugin.rules[k];
        linter.defineRule(rule.meta.docs.ruleId, rule);
      }

      return linter;
    },
  },

  async mounted() {
    // Load parser asynchronously.
    const [jsoncESLintParser, vueESLintParser] = await Promise.all([
      import("espree").then(() => import("jsonc-eslint-parser")),
      import("espree").then(() => import("vue-eslint-parser")),
    ]);
    this.jsoncESLintParser = jsoncESLintParser;
    this.vueESLintParser = vueESLintParser;

    const editor = this.$refs.editor;

    editor.$watch("monaco", () => {
      const { monaco } = editor;
      // monaco.languages.j()
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        validate: false,
      });
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        validate: false,
      });
    });
    editor.$watch("codeEditor", () => {
      if (editor.codeEditor) {
        editor.codeEditor.onDidChangeModelDecorations(() =>
          this.onDidChangeModelDecorations(editor.codeEditor)
        );
      }
    });
    editor.$watch("fixedCodeEditor", () => {
      if (editor.fixedCodeEditor) {
        editor.fixedCodeEditor.onDidChangeModelDecorations(() =>
          this.onDidChangeModelDecorations(editor.fixedCodeEditor)
        );
      }
    });
  },

  methods: {
    onDidChangeModelDecorations(editor) {
      const { monaco } = this.$refs.editor;
      const model = editor.getModel();
      monaco.editor.setModelMarkers(model, "json", []);
    },
  },
};
</script>

<style scoped>
.eslint-code-block {
  width: 100%;
  margin: 1em 0;
}
</style>
