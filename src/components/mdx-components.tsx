import { JSX, memo } from "react";

const H1 = createMemoizedComponent('h1', 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl');

const H2 = createMemoizedComponent('h2', 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0');

const P = createMemoizedComponent('p', 'leading-7 [&:not(:first-child)]:mt-6');

const UL = createMemoizedComponent('ul', 'my-6 ml-6 list-disc [&>li]:mt-2');

// const CODE = createMemoizedComponent('code', 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold');

export const MDX_COMPONENTS = {
    h1: H1(),
    h2: H2(),
    p: P(),
    ul: UL(),
    // code: CODE(),

};

function createMemoizedComponent(Component: string, className: string) {
    return () => {
        return memo((props: { children: React.ReactNode }) => {
            const Element = Component as keyof JSX.IntrinsicElements;
            return (
                <Element className={className}>
                    {props.children}
                </Element>
            );
        });
    };
}

