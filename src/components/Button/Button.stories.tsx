import { Button } from '..';

import type { Meta, StoryObj } from '@storybook/react';
import { ChakraSideBySide } from 'cross-compatible-stories';

export default {
    title: 'Components/Button',
    component: Button,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => (
        <ChakraSideBySide>
            <Button>Click Me</Button>
        </ChakraSideBySide>
    ),
};
