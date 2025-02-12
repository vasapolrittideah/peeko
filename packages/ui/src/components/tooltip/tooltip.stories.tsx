import { RiGlobalLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Tooltip } from '@/lib/components';

const meta: Meta<typeof Tooltip.Root> = {
  title: 'Data Display/Tooltip',
  component: Tooltip.Root,
};

export default meta;

type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={150}>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke" size="medium">
              Hover or focus
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content>Tooltip content.</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={150}>
        <Tooltip.Trigger asChild>
          <Button.Root variant="neutral" mode="stroke" size="medium">
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content variant="light">Tooltip content.</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-5">
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={150}>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke" size="medium">
              Large
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="large">Tooltip content.</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root delayDuration={150}>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke" size="xsmall">
              Medium (default)
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="medium">Tooltip content.</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root delayDuration={150}>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke" size="xxsmall">
              Small
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="small">Tooltip content.</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  ),
};

export const Position: Story = {
  render: () => (
    <div className="flex w-full justify-center">
      <div className="inline-grid grid-cols-2 gap-5">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={150}>
            <Tooltip.Trigger asChild>
              <Button.Root variant="neutral" mode="stroke" size="medium">
                Left
              </Button.Root>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">Tooltip content.</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root delayDuration={150}>
            <Tooltip.Trigger asChild>
              <Button.Root variant="neutral" mode="stroke" size="medium">
                Right
              </Button.Root>
            </Tooltip.Trigger>
            <Tooltip.Content side="right">Tooltip content.</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root delayDuration={150}>
            <Tooltip.Trigger asChild>
              <Button.Root variant="neutral" mode="stroke" size="medium">
                Top
              </Button.Root>
            </Tooltip.Trigger>
            <Tooltip.Content side="top">Tooltip content.</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root delayDuration={150}>
            <Tooltip.Trigger asChild>
              <Button.Root variant="neutral" mode="stroke" size="medium">
                Bottom
              </Button.Root>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">Tooltip content.</Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  ),
};

export const HtmlContent: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={150}>
        <Tooltip.Trigger asChild>
          <Button.Root variant="neutral" mode="stroke" size="medium">
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size="large" variant="light" className="max-w-[272px]">
          <div className="flex gap-3">
            <RiGlobalLine className="text-text-sub-600 size-5 shrink-0" />
            <div>
              <div className="text-text-strong-950">Content Title</div>
              <div className="text-paragraph-xs text-text-sub-600 mt-1">
                Insert tooltip description here. It would look much better as
                three lines of text.
              </div>
            </div>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};
