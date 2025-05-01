import * as React from 'react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Table = React.forwardRef< HTMLTableElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( ));
Table.displayName = 'Table'; const TableHeader = React.forwardRef< HTMLTableSectionElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableHeader.displayName = 'TableHeader'; const TableBody = React.forwardRef< HTMLTableSectionElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableBody.displayName = 'TableBody'; const TableFooter = React.forwardRef< HTMLTableSectionElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( tr]:last:border-b-0', className )} {...props} />
));
TableFooter.displayName = 'TableFooter'; const TableRow = React.forwardRef< HTMLTableRowElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableRow.displayName = 'TableRow'; const TableHead = React.forwardRef< HTMLTableCellElement, React.ThHTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableHead.displayName = 'TableHead'; const TableCell = React.forwardRef< HTMLTableCellElement, React.TdHTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableCell.displayName = 'TableCell'; const TableCaption = React.forwardRef< HTMLTableCaptionElement, React.HTMLAttributes
>(({ className, ...props }, ref) => ( ));
TableCaption.displayName = 'TableCaption'; export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption,
};
