import React from 'react';
import { Stack, Pagination as MuiPagination } from '@mui/material';

interface Props<T> {
    items: T[],
    itemsPerPage: number,
    onPageChange: (currenPage: T[]) => void
}
export const Pagination: React.FC<Props<any>> = React.memo(<T,>(props: Props<T>) => {
    const { items, itemsPerPage, onPageChange } = props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    const filteredItems = React.useMemo(()=> {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
        const initIndex = (currentPage - 1) * itemsPerPage;
        const finalIndex = initIndex + itemsPerPage;
        const currentItems = items.slice(initIndex, finalIndex);
        return currentItems;
    }, [items, currentPage, itemsPerPage]); 

    React.useEffect(() => {
        onPageChange(filteredItems);
    }, [filteredItems, onPageChange]);

    const handlePageChange = React.useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    }, []);
  
    return (
        <Stack spacing={2}>
            <MuiPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </Stack>
    );
});