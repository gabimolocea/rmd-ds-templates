/// <reference types="vite/client" />

// Extend ImportMeta to include Vite's glob function
declare global {
  interface ImportMeta {
    glob<T = { default: any }>(
      pattern: string,
      options?: {
        eager?: boolean;
        import?: string;
        query?: string;
        as?: string;
      }
    ): Record<string, () => Promise<T>>;
  }
}

export {};
