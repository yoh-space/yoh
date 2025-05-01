'use client';

// Inspired by react-hot-toast library
import * as React from 'react';

/**
 * @typedef {import('@/components/ui/toast').ToastActionElement} ToastActionElement
 * @typedef {import('@/components/ui/toast').ToastProps} ToastProps
 */

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

/**
 * @typedef {ToastProps & {
 *   id: string;
 *   title?: React.ReactNode;
 *   description?: React.ReactNode;
 *   action?: ToastActionElement;
 * }} ToasterToast
 */

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
};

let count = 0;

/**
 * Generate a unique ID for toasts
 * @returns {string} Unique ID
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

/**
 * @typedef {Object} State
 * @property {ToasterToast[]} toasts - Array of toast notifications
 */

const toastTimeouts = new Map();

/**
 * Add a toast to the removal queue
 * @param {string} toastId - ID of the toast to queue for removal
 */
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * Reducer function for toast state management
 * @param {State} state - Current state
 * @param {Object} action - Action to perform
 * @returns {State} New state
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners = [];

let memoryState = { toasts: [] };

/**
 * Dispatch an action to update toast state
 * @param {Object} action - Action to dispatch
 */
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

/**
 * Create a toast notification
 * @param {Object} props - Toast properties
 * @returns {Object} Toast control object
 */
function toast(props) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

/**
 * Hook for toast functionality
 * @returns {Object} Toast state and control methods
 */
function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
}

export { useToast, toast }; 