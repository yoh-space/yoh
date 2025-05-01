'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import PropTypes from 'prop-types';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const Form = FormProvider;

/**
 * @typedef {Object} FormFieldContextValue
 * @property {string} name - Field name
 */

/**
 * Context for form field
 * @type {React.Context<FormFieldContextValue>}
 */
const FormFieldContext = React.createContext({});

/**
 * Form field component that wraps react-hook-form Controller
 * @param {Object} props - Controller props from react-hook-form
 * @returns {JSX.Element} Wrapped Controller component
 */
const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/**
 * Hook to access form field context and state
 * @returns {Object} Form field information and state
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

/**
 * @typedef {Object} FormItemContextValue
 * @property {string} id - Item ID
 */

/**
 * Context for form item
 * @type {React.Context<FormItemContextValue>}
 */
const FormItemContext = React.createContext({});

/**
 * Form item component that provides context for its children
 */
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

/**
 * Form label component that integrates with form state
 */
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

/**
 * Form control component that connects inputs with form state
 */
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

/**
 * Form description component for help text
 */
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

/**
 * Form message component for validation errors
 */
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

// PropTypes
FormField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.object,
  shouldUnregister: PropTypes.bool,
};

FormItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FormLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FormControl.propTypes = {
  children: PropTypes.node,
};

FormDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FormMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}; 