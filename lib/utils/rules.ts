import type { RuleModule } from "../types";
import arrayBracketNewline from "../rules/array-bracket-newline";
import arrayBracketSpacing from "../rules/array-bracket-spacing";
import arrayElementNewline from "../rules/array-element-newline";
import auto from "../rules/auto";
import commaDangle from "../rules/comma-dangle";
import commaStyle from "../rules/comma-style";
import indent from "../rules/indent";
import keyNameCasing from "../rules/key-name-casing";
import keySpacing from "../rules/key-spacing";
import noBigintLiterals from "../rules/no-bigint-literals";
import noBinaryExpression from "../rules/no-binary-expression";
import noBinaryNumericLiterals from "../rules/no-binary-numeric-literals";
import noComments from "../rules/no-comments";
import noDupeKeys from "../rules/no-dupe-keys";
import noEscapeSequenceInIdentifier from "../rules/no-escape-sequence-in-identifier";
import noFloatingDecimal from "../rules/no-floating-decimal";
import noHexadecimalNumericLiterals from "../rules/no-hexadecimal-numeric-literals";
import noInfinity from "../rules/no-infinity";
import noIrregularWhitespace from "../rules/no-irregular-whitespace";
import noMultiStr from "../rules/no-multi-str";
import noNan from "../rules/no-nan";
import noNumberProps from "../rules/no-number-props";
import noNumericSeparators from "../rules/no-numeric-separators";
import noOctalEscape from "../rules/no-octal-escape";
import noOctalNumericLiterals from "../rules/no-octal-numeric-literals";
import noOctal from "../rules/no-octal";
import noParenthesized from "../rules/no-parenthesized";
import noPlusSign from "../rules/no-plus-sign";
import noRegexpLiterals from "../rules/no-regexp-literals";
import noSparseArrays from "../rules/no-sparse-arrays";
import noTemplateLiterals from "../rules/no-template-literals";
import noUndefinedValue from "../rules/no-undefined-value";
import noUnicodeCodepointEscapes from "../rules/no-unicode-codepoint-escapes";
import noUselessEscape from "../rules/no-useless-escape";
import objectCurlyNewline from "../rules/object-curly-newline";
import objectCurlySpacing from "../rules/object-curly-spacing";
import objectPropertyNewline from "../rules/object-property-newline";
import quoteProps from "../rules/quote-props";
import quotes from "../rules/quotes";
import sortArrayValues from "../rules/sort-array-values";
import sortKeys from "../rules/sort-keys";
import spaceUnaryOps from "../rules/space-unary-ops";
import validJsonNumber from "../rules/valid-json-number";
import vueCustomBlockNoParsingError from "../rules/vue-custom-block/no-parsing-error";

export const rules = [
  arrayBracketNewline,
  arrayBracketSpacing,
  arrayElementNewline,
  auto,
  commaDangle,
  commaStyle,
  indent,
  keyNameCasing,
  keySpacing,
  noBigintLiterals,
  noBinaryExpression,
  noBinaryNumericLiterals,
  noComments,
  noDupeKeys,
  noEscapeSequenceInIdentifier,
  noFloatingDecimal,
  noHexadecimalNumericLiterals,
  noInfinity,
  noIrregularWhitespace,
  noMultiStr,
  noNan,
  noNumberProps,
  noNumericSeparators,
  noOctalEscape,
  noOctalNumericLiterals,
  noOctal,
  noParenthesized,
  noPlusSign,
  noRegexpLiterals,
  noSparseArrays,
  noTemplateLiterals,
  noUndefinedValue,
  noUnicodeCodepointEscapes,
  noUselessEscape,
  objectCurlyNewline,
  objectCurlySpacing,
  objectPropertyNewline,
  quoteProps,
  quotes,
  sortArrayValues,
  sortKeys,
  spaceUnaryOps,
  validJsonNumber,
  vueCustomBlockNoParsingError,
] as RuleModule[];
