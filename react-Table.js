import {
    useColumnOrder,
    useExpanded,
    useFilters,
    useGlobalFilter,
    useGroupBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
    useRowState,
    useSortBy,
  } from "react-table";
  
  export default function useTablePlugins(instance) {
    useColumnOrder(instance);
    useExpanded(instance);
    useFilters(instance);
    useGlobalFilter(instance);
    useGroupBy(instance);
    usePagination(instance);
    useResizeColumns(instance);
    useRowSelect(instance);
    useRowState(instance);
    useSortBy(instance);
  }
  