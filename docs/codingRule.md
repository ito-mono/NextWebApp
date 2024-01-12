# コーディング規約

## 命名規則

| 対象             | 規則             |
| ---------------- | ---------------- |
| 型               | PascalCase       |
| インターフェース | PascalCase       |
| コンポーネント   | PascalCase       |
| クラス           | PascalCase       |
| 関数             | camelCase        |
| 変数             | camelCase        |
| 定数             | UPPER_SNAKE_CASE |

## コンポーネント定義

基本名前付きエクスポートを行う  
→ index.tsで再エクスポートするのが楽になるため

### 例

#### 名前付きエクスポートの場合

```tsx:Component.tsx
export type ComponentProps = {};
export function Component(props:ComponentProps) {};
```

```ts:index.ts
export * from './Component.tsx'
```

#### デフォルトエクスポートの場合

```tsx:Component.tsx
export type ComponentProps = {};
export default function Component(props:ComponentProps) {};
```

```ts:index.ts
export { default as Component, ComponentProps } from './Component'
```

## 関数

基本 function で定義する  
`function name()`

コールバック関数のみ可読性重視でアロー関数

## JSX

基本タグは閉じタグまで全て書く  
`<tag></tag>`

タグの省略記法 `<tag />` は基本使わない（使い分けが面倒くさいので）
