import * as LabelPrimitives from '@radix-ui/react-label';
import * as React from 'react';

import { cnExt } from '@/helpers/cn';

const LabelRoot = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> & {
    disabled?: boolean;
  }
>(({ className, disabled, ...rest }, forwardedRef) => {
  return (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cnExt(
        'flex items-center gap-px',
        'group cursor-pointer text-label-sm text-text-strong-950',
        // disabled
        'aria-disabled:text-text-disabled-300',
        className,
      )}
      aria-disabled={disabled}
      {...rest}
    />
  );
});
LabelRoot.displayName = 'LabelRoot';

function LabelAsterisk({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cnExt(
        'text-error-base',
        // disabled
        'group-aria-disabled:text-text-disabled-300',
        className,
      )}
      {...rest}>
      {children || '*'}
    </span>
  );
}

function LabelSub({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cnExt(
        'text-paragraph-sm text-text-sub-600',
        // disabled
        'group-aria-disabled:text-text-disabled-300',
        className,
      )}
      {...rest}>
      {children}
    </span>
  );
}

export { LabelRoot as Root, LabelAsterisk as Asterisk, LabelSub as Sub };
