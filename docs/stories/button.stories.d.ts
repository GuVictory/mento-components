import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ view, size, rounded, noXPadding, children, ...rest }: import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
        view?: import("../components/Button/types").TButtonType | undefined;
        size?: import("../components/Button/types").TButtonSize | undefined;
        rounded?: boolean | undefined;
        noXPadding?: boolean | undefined;
    }) => JSX.Element;
    tags: string[];
    argTypes: {
        children: {
            control: {
                type: string;
            };
        };
        view: {
            control: {
                type: string;
            };
        };
        size: {
            control: {
                type: string;
            };
        };
        rounded: {
            control: {
                type: string;
            };
        };
        noXPadding: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
//# sourceMappingURL=button.stories.d.ts.map