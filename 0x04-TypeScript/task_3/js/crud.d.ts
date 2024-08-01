import { RowID, RowElement } from '../interface';

declare namespace CRUD {
	function insertRow(row: RowElement): RowID;
	function deleteRow(rowId: RowID): void;
	function updateRow(rowId: RowID, row: RowElement): RowID;
}

export default CRUD;
