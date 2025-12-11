declare module "aos" {
  interface AosOptions {
    duration?: number;
    delay?: number;
    offset?: number;
    once?: boolean;
    easing?: string;
    [key: string]: any;
  }

  interface AosStatic {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosStatic;
  export default AOS;
}
