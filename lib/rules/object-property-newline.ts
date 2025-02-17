import { createRule, defineWrapperListener, getCoreRule } from "../utils";
const coreRule = getCoreRule("object-property-newline");

export default createRule("object-property-newline", {
  meta: {
    docs: {
      description: "enforce placing object properties on separate lines",
      recommended: null,
      extensionRule: true,
      layout: true,
    },
    fixable: coreRule.meta?.fixable,
    hasSuggestions: (coreRule.meta as any).hasSuggestions,
    schema: coreRule.meta!.schema!,
    messages: coreRule.meta!.messages!,
    type: coreRule.meta!.type!,
  },
  create(context) {
    return defineWrapperListener(coreRule, context, context.options);
  },
});
