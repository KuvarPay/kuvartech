import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }

  namespace JSX {
    interface IntrinsicElements {
      "image-slot": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          shape?: string;
          placeholder?: string;
        },
        HTMLElement
      >;
    }
  }
}
