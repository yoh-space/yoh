'use client'; import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const ResizablePanelGroup = ({ className, ...props
}=> ( ); const ResizablePanel = ResizablePrimitive.Panel; const ResizableHandle = ({ withHandle, className, ...props
} withHandle?: boolean;
}) => ( div]:rotate-90', className )} {...props} > {withHandle && ( )} ); export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
