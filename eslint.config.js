// eslint.config.js
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
const customRules = {
  // ---- Style & Formatting -----------------------------------------------
  semi: ["error", "always"],
  quotes: ["error", "double", { avoidEscape: true }],
  "no-var": "error",
  eqeqeq: ["error", "always"], // Требовать === вместо ==

  // ---- Console & Debug -----------------------------------------------
  "no-console": ["warn", { allow: ["warn", "error", "group", "groupEnd"] }],
  "no-debugger": "error",

  // ---- TypeScript -----------------------------------------------
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-empty-object-type": "off", // Разрешаем export type {}
  "@typescript-eslint/no-unused-vars": "off",

  // "@typescript-eslint/no-unused-vars": [
  //   "warn",
  //   {
  //     argsIgnorePattern: "^_", // Разрешаем _arg как "намеренно неиспользуемый"
  //     varsIgnorePattern: "^_",
  //   },
  // ],
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "error",
    {
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-ignore": "allow-with-description", // "@ts-ignore" только с комментарием
      "ts-expect-error": "allow-with-description",
    },
  ],

  // ---- React -----------------------------------------------

  // Хуки (расширяем рекомендованные)
  ...reactHooks.configs.recommended.rules,
  "react-hooks/exhaustive-deps": "error", // Строго: все зависимости в useEffect

  // ---- React Refresh / Vite -----------------------------------------------
  "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

  // ---- JSX & Accessibility -----------------------------------------------
  "react/jsx-key": [
    "error",
    {
      checkFragmentShorthand: true, // Проверять <>...</>
      warnOnDuplicates: true, // Предупреждать о дублях ключей
    },
  ],

  // ---- Comments & Documentation -----------------------------------------------
  "no-warning-comments": "off", // Отключаем предупреждения про TODO/FIXME
};

// ============================================================================
// 🧪 ПРАВИЛА ДЛЯ ТЕСТОВЫХ ФАЙЛОВ (override)
// ============================================================================

const testRules = {
  "no-console": "off", // В тестах можно логировать
  "@typescript-eslint/no-explicit-any": "warn", // В тестах можно any для моков
};

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  { ignores: ["dist", "public", "node_modules", "build", "coverage", "**/src/shared/ui/**"] },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.2.0" } },
    plugins: {
      "unused-imports": unusedImports,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: pluginReact,
    },
    rules: customRules,
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/__tests__/**", "/tests/**"],
    rules: testRules,
  },
  prettier
);
